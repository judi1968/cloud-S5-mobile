import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect, useHistory } from 'react-router';

import { playCircle, radio, library, search, power, add, mail, hourglassSharp, home } from 'ionicons/icons';
import Accueil from '../pages/Accueil';


// import HomePage from './pages/HomePage';
// import RadioPage from './pages/RadioPage';
// import LibraryPage from './pages/LibraryPage';
// import SearchPage from './pages/SearchPage';

function FooterTab() {
  return (
    <IonReactRouter>
      <IonTabs>
        
        <IonRouterOutlet>
          {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          <Route path="accueils" render={() => <Accueil />} exact={true} />
          {/* <Route path="/library" render={() => <LibraryPage />} exact={true} /> */}
          {/* <Route path="/search" render={() => <SearchPage />} exact={true} /> */} 
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/accueils">
            <IonIcon icon={home} />
            <IonLabel>Accueil</IonLabel>
          </IonTabButton>

          <IonTabButton tab="radio" href='/creer_annonce'>
            <IonIcon icon={add} />
            <IonLabel>Creer un annonce</IonLabel>
          </IonTabButton>

          <IonTabButton tab="library" href="/library">
            <IonIcon icon={mail} />
            <IonLabel>Message</IonLabel>
          </IonTabButton>

          <IonTabButton tab="search" href="/search">
            <IonIcon icon={power} />
            <IonLabel>Deconnection</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}
export default FooterTab;