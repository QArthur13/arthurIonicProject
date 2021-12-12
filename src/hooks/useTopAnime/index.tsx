import {useEffect, useState} from "react";
import {listTop} from "../../type";
import {getDoc, getFirestore, doc} from "firebase/firestore";

const useTopAnime = () => {

    const [topAnime, setTopAnime] = useState<listTop>({

        title: "",
        items: []

    });

    useEffect(() => {

        const db = getFirestore();
        getDoc(doc(db, "topList", "topAnime"))
            .then((docSnap) => {

                const data: any = docSnap.data();
                setTopAnime(data.data);

            });

    }, []);

    return {

        topAnime

    }

};

export default useTopAnime;
