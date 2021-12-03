import React, {useState} from "react";
import {RouteComponentProps, useParams} from "react-router";
import {IonButtons, IonHeader, IonPage, IonToolbar, IonBackButton, IonContent, IonTitle} from "@ionic/react";
import {Top} from "../../../type";

type ViewTopProps = RouteComponentProps<{title: string}>

const Details: React.FC<ViewTopProps> = ({ match }) => {

    const { params: {title}} = match;

    //const { title } = useParams<{ title: string}>()

    const [top5, setTop] = useState<Top | undefined>();

    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/top5"/>
                    </IonButtons>
                    <IonTitle>Titre</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h1>Bonjour</h1>
            </IonContent>
        </IonPage>

    )

};

export default Details;
