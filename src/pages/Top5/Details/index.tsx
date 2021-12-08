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
    IonThumbnail
} from "@ionic/react";
import {useTop} from "../../../hooks";

type ViewTopProps = RouteComponentProps<{name: string;}>;

const Details: React.FC<ViewTopProps> = ({ match }) => {

    const { params: {name}} = match;
    const { top } = useTop();

    //console.log(top);

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

    /*if (!top1) {

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
                    <h1>Pas de Top :/</h1>
                </IonContent>
            </IonPage>

        )

    }

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
                <h1>{titleTop}</h1>
                {items.map((item, i) => {

                    return(
                        <div key={i}>
                            <p>{item.name}</p>
                            {item.img && (
                                <IonThumbnail>
                                    <img src={item.img}/>
                                </IonThumbnail>
                            )}
                            <p>{item.desc}</p>
                        </div>
                    )

                })}
            </IonContent>
        </IonPage>

    )*/

};

export default Details;
