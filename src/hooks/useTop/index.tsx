import {useState, useEffect, useCallback} from "react";
import {listTop, Top} from "../../type";
import {doc, getDoc, getFirestore, setDoc} from "firebase/firestore";

const useTop = () => {

    const [top, setTop] = useState<listTop>({
        title: "",
        items: []
    });

    const setTopListDatabase  = (data: listTop) => {
        const db = getFirestore();
        /*setDoc(doc(db, "topList", "list"), { data }).then(() => {
            setTop(data)
        })*/
        setDoc(doc(db, "toplist", "list"), { data }).then(() => {
            setTop(data);
        })
    };

    const getTopName = (name: string) => {

        top.items.map((item) => {

            if (name == item.name) {

                const findItem = [item.name, item.img];
                console.log(findItem);
                return findItem;

            }

        });

        return top;
    }

    useEffect(() => {
            const db = getFirestore();
            getDoc(doc(db, "topList", "newList"))
                .then((docSnap) => {

                    const data: any = docSnap.data();
                    setTop(data.data);

                });

    }, []);

    //console.log(top);

    return {
        top,
        setTopListDatabase,
    }




};

export default useTop;
