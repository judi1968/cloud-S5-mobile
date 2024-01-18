import { IonContent,  IonPage } from '@ionic/react';
import './assets/css/Login.css';
import Formulaire from '../components/Login/FormulaireLogin';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Formulaire />
        <center>
        <br />
        
        </center>
      </IonContent>
    </IonPage>
  );
};

export default Home;
