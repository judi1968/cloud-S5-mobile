import { IonContent,  IonHeader,  IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import Formulaire from '../components/Login/FormulaireLogin';
import FooterTab from '../components/FooterTab';
import FormulaireCreerAnnonce from '../components/CreerAnnonce/FormulaireCreerAnnonce';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import FormulaireCreerAnnonce2 from '../components/CreerAnnonce/FormulaireCreerAnnonce2';
import FormulaireCreerAnnonce3 from '../components/CreerAnnonce/FormulaireCreerAnnonce3';

const CreerAnnonce: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Creer annonce</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/formulaireOne">
          <FormulaireCreerAnnonce />
        </Route>
        <Route exact path="/formulaireTwo">
          <FormulaireCreerAnnonce2 />
        </Route>
        <Route exact path="/formulaireThree">
          <FormulaireCreerAnnonce3 />
        </Route>
        <Route exact path="/creer_annonce">
          <Redirect to="/formulaireOne" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
    </IonPage>
  );
};

export default CreerAnnonce;
