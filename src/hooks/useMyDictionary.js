import {useEffect, useState} from 'react';
import {getUserDictionaryFromFirebase} from '../firebase/firebase-helpers';

export const useMyDictionary = (user) => {
    const [myDictionary, setMyDictionary] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setLoading(true);
            getUserDictionaryFromFirebase(user)
                .then((result) => {
                    setMyDictionary(result);
                })
                .catch((e) => {
                    setMyDictionary([]);
                    console.log(e);
                });

            setLoading(false);
        }
    }, [user]);

    return {myDictionary, loading};
};
