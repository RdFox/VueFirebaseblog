import Firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDmohfWVSL1716I-VkUVp8hkWB2MePab3M",
  authDomain: "blogexample-33295.firebaseapp.com",
  databaseURL: "https://blogexample-33295.firebaseio.com",
  projectId: "blogexample-33295",
  storageBucket: "blogexample-33295.appspot.com",
  messagingSenderId: "849369740716"
};
const app = Firebase.initializeApp(config);

const database = app.database();
console.log(database);
export default database;
