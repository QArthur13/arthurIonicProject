import React, {useEffect} from "react";
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel, IonList,
    IonMenuButton,
    IonPage, IonThumbnail,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import "./index.css"
import {useTopVideoGame} from "../../hooks";
import {Toast} from "@capacitor/toast";

const VideoGame = () => {

    const { topVideoGame } = useTopVideoGame();

    useEffect(() => {

        Toast.show({

            text: "La page Jeux-Vidéo"

        });

    }, []);

    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Mon Top Jeuxvidéo</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonLabel>{topVideoGame.title}</IonLabel>
                    {topVideoGame.items.map((item, i) => {
                        return(
                            <IonItem key={i} routerLink={`videoGame/${item.name}`}>
                                <IonLabel>
                                    <p>{item.name}</p>
                                    {item.img && (
                                        <IonThumbnail>
                                            <img src={item.img}/>
                                        </IonThumbnail>
                                    )}
                                </IonLabel>
                            </IonItem>
                        )
                    })}
                </IonList>
            </IonContent>
        </IonPage>

    );

};

export default VideoGame;
