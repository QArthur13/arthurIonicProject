import React, {useEffect} from "react";
import {useTopManga} from "../../hooks";
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

const Manga = () => {

    const { topManga } = useTopManga();

    useEffect(() => {

        Toast.show({
            text: "La page Manga!"
        });

    }, []);

    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Mon Top manga</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonLabel>{topManga.title}</IonLabel>
                    {topManga.items.map((item, i) => {
                        return(
                            <IonItem key={i} routerLink={`Manga/${item.name}`}>
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

export default Manga;
