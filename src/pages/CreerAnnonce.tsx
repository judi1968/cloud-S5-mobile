import { IonContent,  IonHeader,  IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Formulaire from '../components/Login/FormulaireLogin';
import FooterTab from '../components/FooterTab';

const CreerAnnonce: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Creation annonce</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        Vous devez vous connecter
      </div>
      </IonContent>
    </IonPage>
  );
};

export default CreerAnnonce;
