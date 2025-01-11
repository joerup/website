import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const appsFilePath = path.join(process.cwd(), 'data', 'apps.json');
const versionsFilePath = path.join(process.cwd(), 'data', 'versions.json');

export function getSortedAppsData() {
  const appsFileContents = fs.readFileSync(appsFilePath, 'utf8');
  const versionsFileContents = fs.readFileSync(versionsFilePath, 'utf8');
  
  const allAppsData = JSON.parse(appsFileContents);
  const versionsData = JSON.parse(versionsFileContents);

  return allAppsData
    .filter(app => app.visible === true)
    .map(app => ({
      ...app,
      versions: versionsData[app.string] || []
    }))
    .sort((a, b) => a.id - b.id);
}

export function getAllAppIDs() {
  const fileContents = fs.readFileSync(appsFilePath, 'utf8');
  const allAppsData = JSON.parse(fileContents);

  return allAppsData.map(app => {
    return {
      params: {
        app: app.string,
      },
    };
  });
}

export async function getAppData(string) {
  const fileContents = fs.readFileSync(appsFilePath, 'utf8');
  const allAppsData = JSON.parse(fileContents);
  const appData = allAppsData.find(app => app.string === string);

  return appData;
}

export async function getAppRelatedData(appString, type) {
  const appsDirectory = path.join(process.cwd(), `data/${type}`);
  const fileExtension = type === 'promocodes' ? 'txt' : 'md';
  const fullPath = path.join(appsDirectory, `${appString}.${fileExtension}`);

  if (!fs.existsSync(fullPath)) {
    return '';
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  if (fileExtension === 'txt') {
    return fileContents;
  }

  // Parse the markdown file metadata and content
  const matterResult = matter(fileContents);

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    ...matterResult.data,
    contentHtml,
  };
}