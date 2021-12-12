import React from "react";
import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
  addCircle, addCircleOutline,
  archiveOutline,
  archiveSharp, book,
  bookmarkOutline, gameController,
  heartOutline,
  heartSharp, home,
  list, logOut,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp, tv,
  warningOutline,
  warningSharp
} from 'ionicons/icons';
import './index.css';
import {AppPage} from "../../interface";

const appPages: AppPage[] = [

    {
      title: 'Accueil',
      url: '/',
      iosIcon: home,
      mdIcon: home
    },
    {
      title: 'Top de mes Manga',
      url: '/Manga',
      iosIcon: book,
      mdIcon: book
    },
    {
      title: 'Top de mes Anime',
      url: '/Anime',
      iosIcon: tv,
      mdIcon: tv
    },
    {
      title: 'Top de mes Jeux-vidéo',
      url: '/videoGame',
      iosIcon: gameController,
      mdIcon: gameController
    }

];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Menu de l'app</IonListHeader>
          <IonNote>Application faite par Arthur</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url}
                         routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
