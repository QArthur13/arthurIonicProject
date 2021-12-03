import React, {useEffect, useState} from "react";
import {
    IonButton,
    IonButtons, IonCol,
    IonContent, IonGrid,
    IonHeader, IonInput, IonItem,
    IonItemDivider, IonLabel,
    IonList,
    IonMenuButton,
    IonPage, IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {itemTop, listTop, Top} from "../../../type";
import {useTop} from "../../../hooks";
import {RouteComponentProps} from "react-router";

const Create = () => {

    const { top, setTopListDatabase } = useTop();

    const [title, setTitle] = useState<string>(top.title);
    const [items, setItems] = useState<itemTop[]>(top.items);

    const modifyItem = (item: itemTop) =>
        setItems((_items) => {

            let findItem = _items.find((i) => i.id === item.id);
            if (!findItem) return _items;
            findItem = item;
            return Array.from(_items);
        });


    useEffect(() => {
        setTitle(top.title);
        setItems(top.items)
    }, [top])

    return(

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Création d'un Top</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {/*<IonList>
                    <IonItemDivider>Saisizer les informations</IonItemDivider>
                    <IonItem>
                        <IonLabel>Titre:</IonLabel>
                        <IonInput value={title} onIonChange={(e) => setTitle(e.detail.value || "")}></IonInput>
                    </IonItem>
                </IonList>
                {items.map((item) => (
                    <IonList key={item.id}>
                        <IonItemDivider>{item.id}. {item.name}</IonItemDivider>
                        <IonItem>
                            <IonLabel>Nom:</IonLabel>
                            <IonInput value={item.name} onIonChange={(e) => {item.name = e.detail.value || ""}}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Url Image</IonLabel>
                            <IonInput value={item.img} onIonChange={(e) => {item.img = e.detail.value || ""}}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Description:</IonLabel>
                            <IonInput value={item.desc} onIonChange={(e) => {item.desc = e.detail.value || ""}}></IonInput>
                        </IonItem>
                    </IonList>
                ))}*/}
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel>Titre:</IonLabel>
                                <IonInput value={title} onIonChange={(e) => setTitle(e.detail.value || "")}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonList>
                                {items.map((item) => (
                                    <IonCol key={item.id}>
                                        <IonItemDivider>
                                            {item.id}. {/*{item.name}*/}
                                        </IonItemDivider>
                                        <IonItem>
                                            <IonLabel>Nom:</IonLabel>
                                            <IonInput value={item.name} onIonChange={(e) => {
                                                item.name = e.detail.value || ""; modifyItem(item)}}></IonInput>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>Nom de l'image:</IonLabel>
                                            <IonInput value={item.img} onIonChange={(e) => {
                                                item.img = e.detail.value || ""; modifyItem(item)}}></IonInput>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>Description:</IonLabel>
                                            <IonInput value={item.desc} onIonChange={(e) => {
                                                item.desc = e.detail.value || ""; modifyItem(item)}}></IonInput>
                                        </IonItem>
                                    </IonCol>
                                ))}
                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonButton expand="full" onClick={() => {

                    Array.prototype.concat(setTopListDatabase({title, items}));

                }}>Envoie</IonButton>
            </IonContent>
        </IonPage>

    )

}

export default Create;
