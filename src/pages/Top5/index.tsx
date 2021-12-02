import React from "react";
import "./index.css";
import {
    IonAvatar,
    IonButtons, IonCard, IonCardContent, IonCardHeader,
    IonContent,
    IonHeader, IonImg, IonItem, IonLabel,
    IonList,
    IonListHeader,
    IonMenuButton,
    IonPage, IonThumbnail,
    IonTitle,
    IonToolbar, useIonViewDidEnter
} from "@ionic/react";
import {useTop5} from "../../hooks";
import {list} from "ionicons/icons";

const Top5 = () => {

    const { top5 } = useTop5();

    useIonViewDidEnter(() => {

        console.log("ionViewDidEnter event fired!")

    });

    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Les Top5</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {top5.map((list, index) => {

                        return(

                            <IonItem key={index} routerLink={`/top5/view/${list.title}`}>
                                <IonLabel>
                                    <h1>{list.title}</h1>
                                    {list.items.map((item, j) => {

                                        //return <p key={j}>{item.name}</p>
                                        if (item.img) {

                                            return (

                                                <div key={j}>
                                                    <IonThumbnail>
                                                        <img src={item.img}/>
                                                    </IonThumbnail>
                                                    <p>{item.name}</p>
                                                    <p>{item.number}</p>
                                                </div>

                                            )

                                        } else {

                                            return (

                                                <div key={j}>
                                                    <p>{item.name}</p>
                                                    <p>{item.number}</p>
                                                </div>

                                            )

                                        }

                                    })}
                                </IonLabel>
                            </IonItem>

                        )

                    })}
                </IonList>
            </IonContent>
        </IonPage>

    );

};

export default Top5;
