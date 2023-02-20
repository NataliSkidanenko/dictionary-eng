import {signInWithPopup, signOut} from 'firebase/auth';
import {useCallback, useEffect, useState} from 'react';
import {googleAuthProvider, auth} from '../firebase/firebase';

export const useAuth = () => {
    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user != null) {
                setUser(user);
                return;
            }
        });

        return unsubscribe;
    }, [auth]);

    const logIn = useCallback(() => {
        signInWithPopup(auth, googleAuthProvider)
            .then((credentials) => {
                setUser(credentials.user);
            })
            .catch((e) => console.log(e));
    });

    const logOut = useCallback(() => {
        signOut(auth);
        setUser(null);
    });

    return {user, logIn, logOut};
};
