import React, {useEffect} from "react";
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import "./index.css";
import {happyOutline} from "ionicons/icons";
import {StatusBar} from "@awesome-cordova-plugins/status-bar";

const Home = () => {

    useEffect(() => {
        StatusBar.overlaysWebView(false);
        StatusBar.backgroundColorByName("purple");
    }, []);

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
                <h1 id="welcome">Bonjour à vous visiteur! <IonIcon slot="icon-only" icon={happyOutline}></IonIcon></h1>
                <p>Vous trouverez sur ce site une liste de mes manga/anime préférés ainsi que mes jeuxvidéo préférés</p>
            </IonContent>
        </IonPage>

    );

};

export default Home;
