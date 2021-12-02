import React, {useState} from "react";
import { getAuth, User, onAuthStateChanged, signInWithEmailAndPassword,
    createUserWithEmailAndPassword, signOut } from "firebase/auth";

const useFirebaseLogin = () => {

    const [user, setUser] = useState<User | null>(null);

    const userConnect = () => {

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {

            if (user) {

                setUser(user);

            } else {

                setUser(null);

            }

        });

    };

    const loginWithEmailAndPassword = (email: string, password: string) => {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {

                console.log(user);

            })
            .catch(() => {

                createUserWithEmailAndPassword(auth, email, password)
                    .then((value) => {

                        console.log(value);

                    });

            });

    };

    const logout = () => {

        const auth = getAuth();
        signOut(auth);

    };

    return {
        user,
        userConnect,
        loginWithEmailAndPassword,
        logout
    };

};

export default useFirebaseLogin;
