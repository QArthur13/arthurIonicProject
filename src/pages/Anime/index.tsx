import React, {useEffect, useState} from "react";
import {useTopAnime} from "../../hooks";
import {Toast} from "@capacitor/toast";
import {
    IonButtons,
    IonContent,
    IonHeader, IonItem,
    IonLabel,
    IonList,
    IonMenuButton,
    IonPage, IonThumbnail,
    IonTitle,
    IonToolbar
} from "@ionic/react";

const Anime = () => {

    const { topAnime } = useTopAnime();

    useEffect(() => {

        Toast.show({

            text: "La page Anime!"

        });

    }, []);

    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Mon Top manga/anime</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonLabel>{topAnime.title}</IonLabel>
                    {topAnime.items.map((item, i) => {
                        return(
                            <IonItem key={i} routerLink={`Anime/${item.name}`}>
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

export default Anime;
