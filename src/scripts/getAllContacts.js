import { readContacts } from '../utils/readContacts';

export const getAllContacts = async () => {
  return JSON.parse(await readContacts());
};

console.log(await getAllContacts());
