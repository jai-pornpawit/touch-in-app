import * as firebase from 'firebase';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBgUcUzNQashsCcEmCgrEVzQtEz_lx8I1A",
  authDomain: "fir-storage-46775.firebaseapp.com",
  databaseURL: "https://fir-storage-46775.firebaseio.com",
  projectId: "fir-storage-46775",
  storageBucket: "fir-storage-46775.appspot.com",
  messagingSenderId: "421178007143",
  appId: "1:421178007143:web:57bdbd8e96e31d5bb47ec2",
  measurementId: "G-M3YCRX1ZJR"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export {
  storage, firebase as default
}
