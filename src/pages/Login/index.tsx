import React, {ChangeEvent, useState} from "react";
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader, IonInput,
    IonItem, IonLabel,
    IonList,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import "./index.css";

const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    {/*<IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>*/}
                    <IonTitle>Connexion</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {/*<h1 className="construction">Page en cours de construction!</h1>*/}
                <IonList>
                    <IonItem>
                        <IonLabel>Email:</IonLabel>
                        <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value || "")} />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Mot de Passe</IonLabel>
                        <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.detail.value || "")} />
                    </IonItem>
                    <IonItem>
                        <IonButton expand="full"
                                   onClick={() => {}}>Connection</IonButton>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>

    );

};

export default Login;
