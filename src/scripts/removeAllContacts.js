import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const constants = JSON.parse(await readContacts());
  if (constants.legth === 0) {
    console.log('no contacts found');
    return;
  }
  await writeContacts([]);
  return console.log('data removed');
};

removeAllContacts();
