import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const directory = path.join(process.cwd(), 'data', 'pages');

export function getSortedPagesData(app) {
  const allPagesData = [];
  
  const appPath = path.join(directory, app);
  const appFiles = fs.readdirSync(appPath).filter(file => file !== 'index.md');

  appFiles.forEach((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(appPath, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const data = {
      string: id,
      app: app,
      ...matterResult.data,
    };
    allPagesData.push(data);
  });

  return allPagesData
    .sort((a, b) => { a.title < b.title });
}

export function getAllPageIDs() {
  const appDirectories = fs.readdirSync(directory);

  const allIds = appDirectories.reduce((ids, appDir) => {
    const appPath = path.join(directory, appDir);
    const appFiles = fs.readdirSync(appPath).filter(file => file !== 'index.md');

    const appFilesData = appFiles.map((fileName) => {
      const page = fileName.replace(/\.md$/, '');
      return {
        params: {
          app: appDir, 
          page: page,
        },
      };
    });

    return [...ids, ...appFilesData];
  }, []);

  return allIds;
}

export async function getPageData(app, page) {
  const appDirectory = path.join(directory, app);
  const fullPath = path.join(appDirectory, `${page}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  let contentHtml = processedContent.toString().split("===");
  contentHtml.forEach((html) => { console.log("\n" + html) })

  return {
    page,
    app,
    contentHtml,
    ...matterResult.data,
  };
}