import { getFirestore, doc, getDoc } from "firebase/firestore";
import {useEffect} from "react";

const useFirebaseDatabase = () => {

    const getTop5 = () => {

        const db = getFirestore();
        getDoc(doc(db, "topList", "list"))
            .then((docSnap) => {

                const data = docSnap.data();

                if (data) {

                    console.log(`Ìl y a des documents: ${data}`);

                } else {

                    console.log("C'est vide!");

                }

            });
    }

    return {

        getTop5

    };

};

export default useFirebaseDatabase;
