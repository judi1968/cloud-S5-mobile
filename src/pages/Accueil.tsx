import { IonContent,  IonFooter,  IonPage } from '@ionic/react';
import './assets/css/Login.css';
import Formulaire from '../components/Login/FormulaireLogin';
import FooterTab from '../components/FooterTab';

const Accueil: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        Accueil
        <FooterTab></FooterTab>
      </IonContent>
    </IonPage>
  );
};

export default Accueil;
