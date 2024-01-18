import { IonContent,  IonPage } from '@ionic/react';
import "./assets/css/CreerCompte.css"
import FormulaireCreerCompte from '../components/Login/FormulaireCreerCompte';

const CreerCompte: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <FormulaireCreerCompte />
        <div className='btn-control'>
            <br />
            <a href="/login" className='btn-cancel'>Retour</a>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CreerCompte;
