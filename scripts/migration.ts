import { resolve } from 'path';
import { exec, ExecException } from 'child_process';

const npxPackagesInstall = 'npx env-cmd typeorm-ts-node-esm';
const getMigrationCommand = (action: string) => `migration:${action}`;

const pathToDatabaseDir = resolve(__dirname, '../src/database');
const pathToDataSource = resolve(pathToDatabaseDir, './database.source.ts');
const pathToMigrationsDir = resolve(pathToDatabaseDir, './migrations');

const [action, ...otherArguments] = process.argv.slice(2);

const formatCommand = () => {
  let resultCommand = `${npxPackagesInstall} ${getMigrationCommand(action)}`;

  if (action !== 'run') {
    const migrationFilename = otherArguments.shift();
    const pathToMigration = resolve(pathToMigrationsDir, migrationFilename);

    resultCommand = `${resultCommand} ${pathToMigration}`;
  }

  const stringArgs = otherArguments.join(' ');

  if (action !== 'create') {
    resultCommand = `${resultCommand} -d ${pathToDataSource}`;
  }

  return `${resultCommand} ${stringArgs}`;
};

exec(formatCommand(), (error: ExecException | null, stdout: string, stderr: string) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  const output = stdout || stderr;
  // eslint-disable-next-line no-console
  console.log(output);
});
