import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
} from '@ionic/react';
import Formulaire from '../components/Login/FormulaireLogin';
import FooterTab from '../components/FooterTab';
import { searchCircle } from 'ionicons/icons';

const Accueil: React.FC = () => {

  // var and effect
  const [searchValue, setSearchValue] = useState<string>('');
  useEffect(() => {
    setSearchValue('Aucun annonce');
  }, []);
  function searchAnnonceAction(event: CustomEvent){
    const value = event.detail.value || '' 
    setSearchValue(value)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className='margin-top-search-bar' ></div>
          <IonSearchbar animated={true} searchIcon={searchCircle} placeholder="Recherche..." onIonInput={searchAnnonceAction}></IonSearchbar>
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
         {searchValue}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Accueil;
