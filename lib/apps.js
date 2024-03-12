import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const appsDirectory = path.join(process.cwd(), 'apps');

export function getSortedAppsData() {
  const fileNames = fs.readdirSync(appsDirectory);
  const allAppsData = fileNames.map((fileName) => {
    const string = fileName.replace(/\.md$/, '');

    const fullPath = path.join(appsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      string,
      ...matterResult.data,
    };
  });

  return allAppsData
    .filter(app => app.visible === true)
    .sort((a, b) => a.id - b.id);
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
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  return {
    string,
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