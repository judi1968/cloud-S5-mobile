import { IonContent,  IonHeader,  IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Formulaire from '../components/Login/FormulaireLogin';
import FooterTab from '../components/FooterTab';
import FormulaireCreerAnnonce from '../components/CreerAnnonce/FormulaireCreerAnnonce';

const CreerAnnonce: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Creation annonce</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <FormulaireCreerAnnonce></FormulaireCreerAnnonce>
      </IonContent>
    </IonPage>
  );
};

export default CreerAnnonce;
