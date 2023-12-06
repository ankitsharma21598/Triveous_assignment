import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCIn1-Vjig0AJanGMfQvA5loD363HTSIZs',
  authDomain: 'triveous-news-app-6fc13.firebaseapp.com',
  projectId: 'triveous-news-app-6fc13',
  storageBucket: 'triveous-news-app-6fc13.appspot.com',
  messagingSenderId: '584578348897',
  appId: '1:584578348897:web:4fa0bbcee244099169f720',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
