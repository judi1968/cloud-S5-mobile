import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/FormulaireCreerAnnonce.css'
import { IonContent, IonIcon } from '@ionic/react';
import { checkmark, chevronBackSharp, chevronForward, handLeft, handRight, star } from 'ionicons/icons';
import { useHistory } from 'react-router';
import API_DOMAIN from '../../config/config';

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

  const insertAnnonceAction = () => {
    history.push("/creer_annonce")
  }
  
  return (
    <IonContent>
    <div className="container-formulaire-creer-annonce-3 mt-5">
        <h1>Fin de creation</h1>
        <div className='container-list-element-annonce'>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item active">Prix</li>
                <li className="list-group-item">Audi</li>
            </ul>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item active">Commission</li>
                <li className="list-group-item">Audi</li>
            </ul>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item active">Marque</li>
                <li className="list-group-item">Audi</li>
            </ul>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item active">Type Carburant</li>
                <li className="list-group-item">A third item</li>
            </ul>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item active">Categorie</li>
                <li className="list-group-item">A third item</li>
            </ul>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item active">Transmission</li>
                <li className="list-group-item">A third item</li>
            </ul>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item active">Freinage</li>
                <li className="list-group-item">A third item</li>
            </ul>
        </div>
        <ul className="list-group">
            <li className="list-group-item active" aria-current="true">Equipement internes</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
        <div className="col-12">
          <button className="btn btn-primary btn-prev" onClick={handlePrevEtape}> <IonIcon icon={chevronBackSharp} />Precedent</button>
          <button className="btn btn-success btn-next" onClick={insertAnnonceAction}>Finir<IonIcon icon={checkmark} /></button>
      </div>
  </div>
  </IonContent>
  );
};

export default FinishCreateAndValidateAnnonce;
