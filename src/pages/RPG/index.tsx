import React from "react";
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import "./index.css"

const RPG = () => {

    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Perso</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h1 className="construction">Page en cours de construction!</h1>
            </IonContent>
        </IonPage>

    );

};

export default RPG;
