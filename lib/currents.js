import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const currentsDirectory = path.join(process.cwd(), 'currents');

export function getSortedCurrentsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(currentsDirectory);
  const allCurrentsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const current = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(currentsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      current,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allCurrentsData.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllCurrentIDs() {
  const fileNames = fs.readdirSync(currentsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        current: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getCurrentData(current) {
  const fullPath = path.join(currentsDirectory, `${current}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    current,
    contentHtml,
    ...matterResult.data,
  };
}



