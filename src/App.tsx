import { Redirect, Route, useLocation } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
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

setupIonicReact();

const App: React.FC = () => {

  return(
  
  <IonApp>
    <IonReactRouter>
    <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          <Route path="/home" render={() => <Accueil />} exact={true} />
          <Route path="/radio" render={() => <Login />} exact={true} />
          <Route path="/library" render={() => <CreerCompte />} exact={true} />
          <Route path="/search" render={() => <CreerAnnonce />} exact={true} />
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

          <IonTabButton tab="library" href="/library">
            <IonIcon icon={library} />
            <IonLabel>Library</IonLabel>
          </IonTabButton>

          <IonTabButton tab="search" href="/search">
            <IonIcon icon={search} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
)};

export default App;

{/* <Route exact path="/home">
          
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/creer_compte">
          <CreerCompte />
        </Route>
        <Route exact path="/accueil">
          <Accueil />
        </Route>
        <Route exact path="/creer_annonce">
          <CreerAnnonce />
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route> */}