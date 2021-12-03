import {useState, useEffect} from "react";
import {listTop, Top} from "../../type";
import {useFirebaseDatabase} from "../index";
import {doc, getDoc, getFirestore, setDoc} from "firebase/firestore";

const useTop = () => {

    const [top, setTop] = useState<listTop>({
        title: "",
        items: []
    });

    const setTopListDatabase  = (data: listTop) => {
        const db = getFirestore();
        setDoc(doc(db, "topList", "list"), { data }).then(() => {
            setTop(data)
        })
    };

    /*const pushTop = (top: Top) => {

        const newList = Array.from.prototype.concat(top);
        return setTopListDatabase(newList);

    }*/

    useEffect(() => {
            const db = getFirestore();
            getDoc(doc(db, "topList", "list"))
                .then((docSnap) => {

                    const data: any = docSnap.data();
                    setTop(data.data);
                    //console.log(data.list)

                    /*if (data == "") {

                        console.log('Donnée vide!');

                    } else {

                        console.log(data);
                        setTop5(data);

                    }*/

                });

    }, []);

    //console.log(top);

    return {
        top,
        setTopListDatabase
    }




};

export default useTop;
