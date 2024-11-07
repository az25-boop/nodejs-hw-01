import { readContacts } from '../utils/readContacts';

export const countContacts = async () => {
  const contacts = JSON.parse(await readContacts());
  return contacts.length;
};

console.log(await countContacts());
