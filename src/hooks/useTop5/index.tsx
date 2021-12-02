import {useState, useEffect} from "react";
import {listTop5, Top5} from "../../type";
import {useFirebaseDatabase} from "../index";
import {doc, getDoc, getFirestore, setDoc} from "firebase/firestore";

const useTop5 = () => {

    const [top5, setTop5] = useState<listTop5>([]);
    const { getTop5 } = useFirebaseDatabase();

    const setTopListDatabase  = (data: any) => {
        const db = getFirestore();
        setDoc(doc(db, "topList", "list"), data).then(() => {
            setTop5(data)
        })
    }

    useEffect(() => {
            const db = getFirestore();
            getDoc(doc(db, "topList", "list"))
                .then((docSnap) => {

                    const data: any = docSnap.data();
                    setTop5(data.list);
                    console.log(data.list);

                    /*if (data == "") {

                        console.log('Donnée vide!');

                    } else {

                        console.log(data);
                        setTop5(data);

                    }*/

                });

    }, []);

    return {
        top5
    }




};

export default useTop5;
