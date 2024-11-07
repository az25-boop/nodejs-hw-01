import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';

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
