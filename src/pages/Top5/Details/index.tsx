import React from "react";
import {useParams} from "react-router";
import {IonButtons, IonHeader, IonPage, IonToolbar, IonBackButton, IonContent, IonTitle} from "@ionic/react";

const Details = () => {

    //const { title } = useParams<{ title: string}>()

    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/top5"/>
                    </IonButtons>
                    <IonTitle>Titre</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h1>Bonjour</h1>
            </IonContent>
        </IonPage>

    )

};

export default Details;
