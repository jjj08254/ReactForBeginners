import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCJG00JZHN079NbglfORz2PGgHrsphTiH0',
  authDomain: 'catch-of-the-day-jojo-jack.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-jojo-jack.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
