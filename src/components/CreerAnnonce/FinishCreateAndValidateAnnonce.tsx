import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/FormulaireCreerAnnonce.css'
import { IonContent, IonIcon } from '@ionic/react';
import { checkmark, chevronBackSharp, chevronForward, handLeft, handRight, star } from 'ionicons/icons';
import { useHistory } from 'react-router';
import API_DOMAIN from '../../config/config';
import axios from 'axios';

const FinishCreateAndValidateAnnonce: React.FC = () => {
  const history = useHistory();
  const [commissionData,setCommissionData] = useState(0);
  const [commission,setCommission] = useState<number>(0);
  const [etatPrix,setEtatPrix] = useState(false);
  const [priceAnnonce,setPriceAnnonce] = useState<number>(0);
  function convertirEnMontant(nombre:number) {
     // Vérifiez si le nombre est un nombre entier
  const estEntier = nombre % 1 === 0;

  // Formate le nombre en utilisant un espace comme séparateur de milliers
  const nombreFormate = estEntier
    ? nombre.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    : nombre.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');

  // Ajoute " Ar" à la fin du montant
  const montantFormate = `${nombreFormate} Ar`;

  return montantFormate;
  }
  const fetchCommissionData = async () => {
    try {
      const response = await fetch(`${API_DOMAIN}/commission/${commission}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
          const data = await response.json();
          
          setCommissionData(data.data.tauxCommission);
        }
        
      } catch (error) {
        console.error('Erreur lors de la demande au serveur:', error);
      }
    };
  const handlePrevEtape = () => {
    history.push("/formulaireThree");
  }
  const handleNextEtape = () => {
    if (priceAnnonce==0) {
      setEtatPrix(true)
    }else{
      localStorage.setItem('commission',commissionData+"")
      localStorage.setItem('prix',priceAnnonce+"")
    }
  }
  const handleMontantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEtatPrix(false)
    setCommission(parseFloat(e.target.value))
    fetchCommissionData()
    setPriceAnnonce(parseFloat(e.target.value))

  }

  const insertAnnonceAction = async () => {
    try {
      const equipementInterneString = localStorage.getItem('equipementInterne');
      const equipementInterne = equipementInterneString ? JSON.parse(equipementInterneString) : [];
      const prixString = localStorage.getItem('prix');
      const prix = prixString ? parseFloat(prixString) : 0;
      const consoString = localStorage.getItem('consommation');
      const conso = consoString ? parseFloat(consoString) : 0;
      const comString = localStorage.getItem('commission');
      const com = comString ? parseFloat(comString) : 0;
      const response = await axios.post(
        `${API_DOMAIN}/annonce`,
        {
          'prix': prix,
          'code_annonce': "0000",
          'annee_fabrication': localStorage.getItem('anne_modification'),
          'couleur': localStorage.getItem('couleur'),
          'consommation': conso,
          'commission': com,
          'categorie_voiture_id': localStorage.getItem('createAnnonceCategorie'),
          'marque_voiture_id': localStorage.getItem('createAnnonceMarque'),
          'type_carburant_voiture': localStorage.getItem('createAnnonceTypeCarburant'),
          'transmission_voiture': localStorage.getItem('createAnnonceTransmission'),
          'freignage_voiture': localStorage.getItem('createAnnonceFreinage'),
          'equipement_interne': equipementInterne,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`

          },
        }
      );

      if (response.data.status === 200) {
        // Authentification réussie, naviguez vers la page souhaitée
        
        localStorage.setItem("token", response.data.tknidclient);
        // Récupérez le token du localStorage
        const storedToken = localStorage.getItem("token");

        // Utilisez le token comme nécessaire
        console.log("Token récupéré :", storedToken);

        history.push('/rooter_page');
      }else{
        // Gestion des erreurs d'authentification
      }
    } catch (error: any) {
      // Gestion des erreurs réseau ou autres
    } finally {
    }
    history.push("/creer_annonce")
  }
  
  return (
    <IonContent>
    <div className="container container-formulaire-creer-annonce-3 mt-5 " style={{justifyContent:'center',marginRight:'20%'}}>
      <center>
        <h1 style={{justifyContent:'center',marginTop:'50%'}}>Vous voulez creer cette annonce ?</h1>
      </center>
        <div className="col-11">
          <button className="btn btn-primary btn-prev" onClick={handlePrevEtape}> <IonIcon icon={chevronBackSharp} />Precedent</button>
          <button className="btn btn-success btn-next" onClick={insertAnnonceAction}>Oui , je valide<IonIcon icon={checkmark} /></button>
      </div>
  </div>
  </IonContent>
  );
};

export default FinishCreateAndValidateAnnonce;
