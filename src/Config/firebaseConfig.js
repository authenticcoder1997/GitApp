import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAxtHe38QhykIKg1XJB25tMxtX8tqpOTlU",
  authDomain: "mygitapp-93e0f.firebaseapp.com",
  databaseURL: "https://mygitapp-93e0f.firebaseio.com",
  projectId: "mygitapp-93e0f",
  storageBucket: "mygitapp-93e0f.appspot.com",
  messagingSenderId: "962172006976",
  appId: "1:962172006976:web:91917112c03d4b6346e5a5",
  measurementId: "G-V2V8RT3226",
};

const app = initializeApp(firebaseConfig);
export default app;
