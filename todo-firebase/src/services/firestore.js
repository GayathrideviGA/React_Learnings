import firebaseDb from './firebase';

/* Intitialize the firestore database */
const firestoreDb = firebaseDb.firestore();
firestoreDb.settings({
  timestampsInSnapshots: true
});

/* Export the firestore database */
export default firestoreDb;