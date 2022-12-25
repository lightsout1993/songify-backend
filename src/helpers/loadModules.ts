import { resolve } from 'path';
import { readdirSync } from 'fs';

const loadModules = <T>(path: string): T[] => {
  const resolvedPath = resolve(__dirname, path);

  const modules = readdirSync(resolvedPath)
    .filter((file) => file.endsWith('.ts'))
    // eslint-disable-next-line global-require,import/no-dynamic-require
    .map((file) => require(resolve(resolvedPath, file)));

  return modules.map((module) => Object.values(module)[0] as T);
};

export default loadModules;
