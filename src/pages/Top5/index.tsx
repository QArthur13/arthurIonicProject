import React, {useEffect} from "react";
import "./index.css";
import {
    IonAvatar, IonButton,
    IonButtons, IonCard, IonCardContent, IonCardHeader,
    IonContent,
    IonHeader, IonIcon, IonImg, IonItem, IonLabel,
    IonList,
    IonListHeader,
    IonMenuButton,
    IonPage, IonThumbnail,
    IonTitle,
    IonToolbar, useIonViewDidEnter
} from "@ionic/react";
import {useTop} from "../../hooks";
import {list, shareSocialOutline} from "ionicons/icons";
import {RouteComponentProps} from "react-router";
import {SocialSharing} from "@awesome-cordova-plugins/social-sharing";
import {Toast} from "@capacitor/toast";

const Top = () => {

    const { top } = useTop();

    useEffect(() => {

        Toast.show({
            text: "Salut!"
        });

    }, []);

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
                    <IonLabel>{top.title}</IonLabel>
                    {top.items.map((item, i) => {
                        return(
                            <IonItem key={i} routerLink={`top5/${item.name}`}>
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

export default Top;
