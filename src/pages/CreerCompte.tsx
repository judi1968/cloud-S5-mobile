import { IonContent,  IonPage } from '@ionic/react';
import './assets/css/Login.css';
import FormulaireCreerCompte from '../components/Login/FormulaireCreerCompte';

const CreerCompte: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <FormulaireCreerCompte />
        <center>
            <br />
            <a href="/login">Retour</a>
        </center>
      </IonContent>
    </IonPage>
  );
};

export default CreerCompte;
