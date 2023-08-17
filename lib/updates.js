import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const updatesDirectory = path.join(process.cwd(), 'updates');

export function getSortedUpdatesData() {
  const appDirectories = fs.readdirSync(updatesDirectory);

  const allUpdatesData = [];
  appDirectories.forEach((appDir) => {
    const appPath = path.join(updatesDirectory, appDir);
    const appFiles = fs.readdirSync(appPath);

    const appUpdates = appFiles.map((fileName) => {
      const updateId = fileName.replace(/\.md$/, '');

      const fullPath = path.join(appPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      const updateData = {
        app: appDir,
        version: updateId, 
        ...matterResult.data,
      };

      allUpdatesData.push(updateData);
    });
  });

  // Sort updates by date
  return allUpdatesData.sort((a, b) => {
    if (a.dates[0] < b.dates[0]) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllUpdateIDs() {
  const appDirectories = fs.readdirSync(updatesDirectory);

  const allUpdateIds = appDirectories.reduce((updateIds, appDir) => {
    const appPath = path.join(updatesDirectory, appDir);
    const appFiles = fs.readdirSync(appPath);

    const appUpdates = appFiles.map((fileName) => {
      const version = fileName.replace(/\.md$/, '');
      return {
        params: {
          app: appDir, 
          version: version,
        },
      };
    });

    return [...updateIds, ...appUpdates];
  }, []);

  return allUpdateIds;
}

export async function getUpdateData(app, version) {
  const appDirectory = path.join(updatesDirectory, app);
  const fullPath = path.join(appDirectory, `${version}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id, contentHtml, and add app
  return {
    version,
    contentHtml,
    app,
    ...matterResult.data,
  };
}