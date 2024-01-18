import { IonContent,  IonFooter,  IonHeader,  IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Formulaire from '../components/Login/FormulaireLogin';
import FooterTab from '../components/FooterTab';

const Message: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Message</IonTitle>
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
        Aucun mesage
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Message;
