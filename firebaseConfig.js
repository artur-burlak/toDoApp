import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

export const firebaseConfig = {
  apiKey: "AIzaSyDJM0Ti6ZxhTeMLl17OYzARk_l7J_UnKwE",
  authDomain: "todofirebase-d3584.firebaseapp.com",
  projectId: "todofirebase-d3584",
  storageBucket: "todofirebase-d3584.appspot.com",
  messagingSenderId: "89499893359",
  appId: "1:89499893359:web:d03fa2369ca92cb575979a",
  databaseURL: "https://todofirebase-d3584-default-rtdb.europe-west1.firebasedatabase.app",
};

export const app = initializeApp(firebaseConfig)

export const database = getDatabase(app)

