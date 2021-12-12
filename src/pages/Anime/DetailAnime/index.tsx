import React, {useEffect} from "react";
import {RouteComponentProps} from "react-router";
import {useTopAnime} from "../../../hooks";
import {Toast} from "@capacitor/toast";
import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {SocialSharing} from "@awesome-cordova-plugins/social-sharing";
import {shareSocialOutline} from "ionicons/icons";

type ViewTopProps = RouteComponentProps<{name: string}>;

const DetailAnime: React.FC<ViewTopProps> = ({match}) => {

    const { params: {name}} = match;
    const { topAnime } = useTopAnime();

    useEffect(() => {

        Toast.show({

            text: "Détails du top!"

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
                {topAnime.items.map((item, i) => {

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

export default DetailAnime;
