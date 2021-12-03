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
import {useTop} from "../../hooks";
import {list} from "ionicons/icons";
import {RouteComponentProps} from "react-router";

const Top = () => {

    const { top } = useTop();

    console.log(top);

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
                    <IonItem  >
                        <IonLabel>
                            <h1>{top.title}</h1>
                                {top.items.map((item, j) => {

                                    //return <p key={j}>{item.name}</p>

                                    return (

                                        <div key={j}>
                                            {item.img && <IonThumbnail>
                                                <img src={item.img}/>
                                            </IonThumbnail>}
                                            <p>{item.name}</p>
                                        </div>

                                    )
                                })}
                        </IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>

    );

};

export default Top;
