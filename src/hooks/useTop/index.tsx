import {useState, useEffect, useCallback} from "react";
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
        /*setDoc(doc(db, "topList", "list"), { data }).then(() => {
            setTop(data)
        })*/
        setDoc(doc(db, "toplist", "list"), { data }).then(() => {
            setTop(data);
        })
    };

    /*const getTopTitle = (name: string) => {

        const test = top.find((nameTop) => nameTop.title === name);
        console.log(test);
        return test;

    };*/
    const getTopName = (name: string) => {

        top.items.map((item) => {

            if (name == item.name) {

                const findItem = [item.name, item.img];
                console.log(findItem);
                return findItem;

            }

        });
        /*for (let x of top.items) {

            if (name == x.name) {

                console.log(x.img);

            }

        }*/

        return top;
    }

    /*const pushTop = (top: Top) => {

        const newList = Array.from.prototype.concat(top);
        return setTopListDatabase(newList);

    }*/

    useEffect(() => {
            const db = getFirestore();
            getDoc(doc(db, "topList", "newList"))
                .then((docSnap) => {

                    const data: any = docSnap.data();
                    setTop(data.data);
                    //console.log(data.data);
                    //console.log(data.data)

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
        setTopListDatabase,
        getTopName
    }




};

export default useTop;
