import React, {useEffect, useState} from "react";
import {RouteComponentProps, useParams} from "react-router";
import {
    IonButtons,
    IonHeader,
    IonPage,
    IonToolbar,
    IonBackButton,
    IonContent,
    IonTitle,
    IonThumbnail, IonButton, IonIcon
} from "@ionic/react";
import {useTop} from "../../../hooks";
import {SocialSharing} from "@awesome-cordova-plugins/social-sharing";
import {shareSocialOutline} from "ionicons/icons";
import {Toast} from "@capacitor/toast";

type ViewTopProps = RouteComponentProps<{name: string;}>;

const Details: React.FC<ViewTopProps> = ({ match }) => {

    const { params: {name}} = match;
    const { top } = useTop();

    //console.log(top);

    useEffect(() => {

        Toast.show({
            text: "God Arthur!"
        });

    }, []);

    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/top5"/>
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonButton onClick={() => {SocialSharing.share("Message", "Subject")}}>
                            <IonIcon slot="icon-only" icon={shareSocialOutline}/>
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Titre du Top</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {top.items.map((item, i) => {

                    return(
                        <div key={i}>
                            { name == item.name &&(

                                <div>
                                    <h1>{item.name}</h1>
                                    <img src={item.img}/>
                                    <p>{item.desc}</p>
                                </div>

                            )}
                        </div>
                    )

                })}
            </IonContent>
        </IonPage>

    )

};

export default Details;
