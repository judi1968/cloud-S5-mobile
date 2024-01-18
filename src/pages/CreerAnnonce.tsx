import { IonContent,  IonPage } from '@ionic/react';
import './assets/css/Login.css';
import Formulaire from '../components/Login/FormulaireLogin';
import FooterTab from '../components/FooterTab';

const CreerAnnonce: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        Creer annonce
        <FooterTab></FooterTab>
      </IonContent>
    </IonPage>
  );
};

export default CreerAnnonce;
