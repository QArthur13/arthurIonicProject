import {useEffect, useState} from "react";
import {listTop} from "../../type";
import {doc, getDoc, getFirestore} from "firebase/firestore";

const useTopVideoGame = () => {

    const [topVideoGame, setTopVideoGame] = useState<listTop>({

        title: "",
        items: []

    });

    useEffect(() => {

        const db = getFirestore();
        getDoc(doc(db, "topList", "topVideoGame"))
            .then((docSnap) => {

                const data: any = docSnap.data();
                setTopVideoGame(data.data);

            });

    }, []);

    return {

        topVideoGame

    }

}

export default useTopVideoGame;
