import { Redirect, Route, useLocation } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact, useIonRouter } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

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
import Login from './pages/Login';
import CreerCompte from './pages/CreerCompte';
import Accueil from './pages/Accueil';
import CreerAnnonce from './pages/CreerAnnonce';
import { library, playCircle, radio, search } from 'ionicons/icons';
// import { useEffect } from 'react';

setupIonicReact();

const App: React.FC = () => {
  const ionRouter = useIonRouter();
  return(
  
  <IonApp>
    <IonReactRouter>
    <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
  
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

export default App;