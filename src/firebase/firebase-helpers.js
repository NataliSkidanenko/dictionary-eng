import {
    collection,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    setDoc,
    Timestamp,
} from 'firebase/firestore';
import {db} from './firebase';

export const addWordToFirebase = async (userId, word) => {
    const ref = doc(db, 'users', userId, 'dictionary', word);
    await setDoc(
        ref,
        {
            spelling: word,
            notes: '',
            timestamp: Timestamp.fromDate(new Date()),
        },
        {merge: true}
    );
};

export const getUserDictionaryFromFirebase = async (user) => {
    const ref = collection(db, 'users', user.email, 'dictionary');
    const q = query(ref, orderBy('spelling', 'asc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
};

export const isWordInDictionary = async (userId, word) => {
    const ref = doc(db, 'users', userId, 'dictionary', word);
    const querySnapshot = await getDoc(query(ref));

    if (querySnapshot.data()) {
        return true;
    }
    return false;
};
