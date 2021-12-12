import {useEffect, useState} from "react";
import {listTop} from "../../type";
import {getDoc, getFirestore, doc} from "firebase/firestore";

const useTopManga = () => {

    const [topManga, setTopManga] = useState<listTop>({

        title: "",
        items: []

    });

    useEffect(() => {

        const db = getFirestore();
        getDoc(doc(db, "topList", "topManga"))
            .then((docSnap) => {

                const data: any = docSnap.data();
                setTopManga(data.data)
            })

    }, []);

    return {

        topManga,

    }

};

export default useTopManga;
