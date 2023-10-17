import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const appsDirectory = path.join(process.cwd(), 'apps');

export function getSortedAppsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(appsDirectory);
  const allAppsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const string = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(appsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      string,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allAppsData.filter(app => app.visible === true).sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllAppIDs() {
  const fileNames = fs.readdirSync(appsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        app: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getAppData(string) {
  const fullPath = path.join(appsDirectory, `${string}.md`);
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
    string,
    contentHtml,
    ...matterResult.data,
  };
}

export function getSortedAppsDataHook() {
  const [appSlugs, setAppSlugs] = useState([]);

  useEffect(() => {
    const fetchSlugs = async () => {
      const slugs = getSortedAppsData();
      setAppSlugs(slugs);
    };

    fetchSlugs();
  }, []);

  return appSlugs;
}