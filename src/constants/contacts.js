import { fileURLToPath } from 'node:url';

export const PATH_DB =
  fileURLToPath(new URL('../bd', import.meta.url)) + '/db.json';
