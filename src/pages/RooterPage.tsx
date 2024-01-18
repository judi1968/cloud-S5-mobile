import { Redirect, Route, useLocation } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact, useIonRouter } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
// import './theme/variables.css';

import { library, playCircle, radio, search } from 'ionicons/icons';
import Accueil from './Accueil';
import CreerAnnonce from './CreerAnnonce';
import CreerCompte from './CreerCompte';
import Login from './Login';


setupIonicReact();

const RooterPage: React.FC = () => {
  return(
  
  <IonApp>
    <IonReactRouter>
    <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/rooter_page" to="/home" />
  
          <Route path="/home" render={() => <Accueil />} exact={true} />
          <Route path="/login" render={() => <Login />} exact={true} />
          <Route path="/creer_compte" render={() => <CreerCompte />} exact={true} />
          <Route path="/creer_annonce" render={() => <CreerAnnonce />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={playCircle} />
            <IonLabel>Listen now</IonLabel>
          </IonTabButton>

          <IonTabButton tab="radio" href="/radio">
            <IonIcon icon={radio} />
            <IonLabel>Radio</IonLabel>
          </IonTabButton>

          <IonTabButton tab="creer_annonce" href="/creer_annonce">
            <IonIcon icon={library} />
            <IonLabel>Creer annonce</IonLabel>
          </IonTabButton>

          <IonTabButton tab="login" href="/login">
            <IonIcon icon={search} />
            <IonLabel>Login</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
)};

export default RooterPage;