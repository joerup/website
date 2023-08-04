import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const updatesDirectory = path.join(process.cwd(), 'updates');

export function getSortedUpdatesData() {
  const projectDirectories = fs.readdirSync(updatesDirectory);

  const allUpdatesData = [];
  projectDirectories.forEach((projectDir) => {
    const projectPath = path.join(updatesDirectory, projectDir);
    const projectFiles = fs.readdirSync(projectPath);

    const projectUpdates = projectFiles.map((fileName) => {
      const updateId = fileName.replace(/\.md$/, '');

      const fullPath = path.join(projectPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      const updateData = {
        project: projectDir,
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
  const projectDirectories = fs.readdirSync(updatesDirectory);

  const allUpdateIds = projectDirectories.reduce((updateIds, projectDir) => {
    const projectPath = path.join(updatesDirectory, projectDir);
    const projectFiles = fs.readdirSync(projectPath);

    const projectUpdates = projectFiles.map((fileName) => {
      const version = fileName.replace(/\.md$/, '');
      return {
        params: {
          project: projectDir, 
          version: version,
        },
      };
    });

    return [...updateIds, ...projectUpdates];
  }, []);

  return allUpdateIds;
}

export async function getUpdateData(project, version) {
  const projectDirectory = path.join(updatesDirectory, project);
  const fullPath = path.join(projectDirectory, `${version}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id, contentHtml, and add project
  return {
    version,
    contentHtml,
    project,
    ...matterResult.data,
  };
}