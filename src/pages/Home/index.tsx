import React from "react";
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import "./index.css";

const Home = () => {

    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Bienvenue</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h1 id="welcome">Bonjour à vous visiteur!</h1>
                <p>Vous trouverez sur ce site une liste de Top5 ainsi que une création de personnage RPG</p>
            </IonContent>
        </IonPage>

    );

};

export default Home;
