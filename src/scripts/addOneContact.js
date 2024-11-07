import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  let contacts = JSON.parse(await readContacts());
  contacts.push(createFakeContact());
  await writeContacts(contacts);
};

addOneContact();
