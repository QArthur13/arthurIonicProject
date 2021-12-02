import React from "react";
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";

const Create = () => {

    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Création d'un Top</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h1>Création en cours</h1>
            </IonContent>
        </IonPage>

    )

}

export default Create;
