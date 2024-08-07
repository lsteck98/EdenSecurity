import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDj0sFYcwFvw2Kveert1l8wo1Zbt7HPyAI',
  authDomain: 'edensecurity-e3765.firebaseapp.com',
  projectId: 'edensecurity-e3765',
  storageBucket: 'edensecurity-e3765.appspot.com',
  messagingSenderId: '722420212089',
  appId: '1:722420212089:web:52bad88cbbf71921294fa8',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };