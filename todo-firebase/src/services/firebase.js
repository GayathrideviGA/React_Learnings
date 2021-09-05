import firebase from 'firebase';
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyADcsmv8qeuOaMwlv0YmENIivif6hUrKC0",
  authDomain: "stock-65cb4.firebaseapp.com",
  projectId: "stock-65cb4",
  storageBucket: "stock-65cb4.appspot.com",
  messagingSenderId: "376430668126",
  appId: "1:376430668126:web:d128c98e265fcce1d807cf",
  measurementId: "G-BEX5GGNN7H"
};

const firebaseDb = firebase.initializeApp(firebaseConfig);

export default firebaseDb;