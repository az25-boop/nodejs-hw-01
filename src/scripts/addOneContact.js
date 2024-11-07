import { createFakeContact } from '../utils/createFakeContact';
import { readContacts } from '../utils/createFakeContact';
import { writeContacts } from '../utils/createFakeContact';

export const addOneContact = async () => {
  let contacts = JSON.parse(await readContacts());
  contacts.push(createFakeContact());
  await writeContacts(contacts);
};

addOneContact();
