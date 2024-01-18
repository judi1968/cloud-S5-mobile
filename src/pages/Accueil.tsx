import { IonContent,  IonFooter,  IonHeader,  IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Formulaire from '../components/Login/FormulaireLogin';
import FooterTab from '../components/FooterTab';

const Accueil: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Liste des annonces</IonTitle>
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
        Aucun annonce
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Accueil;
