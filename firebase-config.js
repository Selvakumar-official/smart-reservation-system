const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "college-bus-tracker.firebaseapp.com",
  databaseURL: "https://college-bus-tracker-default-rtdb.firebaseio.com",
  projectId: "college-bus-tracker",
  storageBucket: "college-bus-tracker.appspot.com",
  messagingSenderId: "123456789",
  appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const auth = firebase.auth();
