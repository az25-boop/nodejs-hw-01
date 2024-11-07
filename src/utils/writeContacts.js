import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  const data = JSON.stringify(updatedContacts);
  try {
    await fs.writeFile(PATH_DB, data, 'utf-8');
    console.log('ok');
  } catch (error) {
    console.log('Error:', error);
  }
};
