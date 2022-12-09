import { openDB } from 'idb';

const initdb = async () =>

// TODO: Add a comment explaining what this method does
// we are creating a db as well as naming and delcation version
  openDB('todos', 1, {
    // TODO: Add a comment explaining the functionality of this method:
    // will not create a db if the database is all ready created
    upgrade(db) {
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      // TODO: Add a comment explaining what we're doing with the object store:
      // creating a new obect that will increment and assiagn keyId
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

initdb();
