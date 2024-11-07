import { createFakeContact } from '../utils/createFakeContact';
import { writeContacts } from '../utils/writeContacts';

const generateContacts = async (number) => {
  let data = [];
  for (let i = 0; i < number; i++) {
    data.push(createFakeContact());
  }
  await writeContacts(data);
};

generateContacts(5);
