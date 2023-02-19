import {signInWithPopup, signOut} from 'firebase/auth';
import {useEffect, useState} from 'react';
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

    const logIn = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then((credentials) => {
                setUser(credentials.user);
            })
            .catch((e) => console.log(e));
    };

    const logOut = () => {
        setUser(null);
        signOut(auth);
    };

    return {user, logIn, logOut};
};
