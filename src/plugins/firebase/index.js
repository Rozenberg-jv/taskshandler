import firebase from "@firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCtp3dNUlK1hSXn1ClSymJ53DIEUImO-Yw",
  authDomain: "taskshandler-be3fe.firebaseapp.com",
  databaseURL:
    "https://taskshandler-be3fe-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "taskshandler-be3fe",
  storageBucket: "taskshandler-be3fe.appspot.com",
  messagingSenderId: "343961256486",
  appId: "1:343961256486:web:35ba32df66027ba6891ce7"
};

// const app = initializeApp(firebaseConfig);
// const db = app.database();

const db = firebase.initializeApp(firebaseConfig).database();

// export const db = initializeApp(firebaseConfig).database();
export const tasksRef = db.ref("example_tasks");
