import {useEffect, useState} from 'react';
import {isWordInDictionary} from '../firebase/firebase-helpers';

export const useIsInDictionary = (user, word) => {
    const [isInDictionary, setIsInDictionary] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setLoading(true);
            isWordInDictionary(user.email, word).then((result) => {
                setIsInDictionary(result);
            });

            setLoading(false);
        }
    }, [user, word]);

    return {isInDictionary, setIsInDictionary, loading};
};
