import React, {useEffect} from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import {AppUrlListener, Create, Details, Home, RPG, Top5} from "./pages";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import firebase from "firebase/compat";
import { initializeApp } from 'firebase/app';
import Login from "./pages/Login";

const firebaseConfig = {
  apiKey: "AIzaSyCrKQyBWexzucFS_liHi8nLnM0cQ4q1v9E",
  authDomain: "arthurfinalprojectmobile.firebaseapp.com",
  projectId: "arthurfinalprojectmobile",
  storageBucket: "arthurfinalprojectmobile.appspot.com",
  messagingSenderId: "595770306766",
  appId: "1:595770306766:web:6923c0a6a4a8255c0ca09f"
};

const App: React.FC = () => {

  useEffect(() => {

    initializeApp(firebaseConfig);

  }, []);

  /*const { user, userConnect } = useFirebaseLogin();

  useEffect(() => {

    initializeApp(firebaseConfig);
    userConnect();

  }, [userConnect]);

  console.log(user);*/

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <AppUrlListener></AppUrlListener>
          <IonRouterOutlet id="main">
            <Route path="/" exact={true} component={Home} />
            <Route path="/rpg" exact={true} component={RPG} />
            <Route path="/top5" exact={true} component={Top5} />
            <Route path="/top5/:name" exact={true} component={Details} />
            {/*<Route path="/top5/create" exact={true} component={Create}/>*/}
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
