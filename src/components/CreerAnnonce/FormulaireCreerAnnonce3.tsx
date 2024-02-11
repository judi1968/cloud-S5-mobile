import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/FormulaireCreerAnnonce.css'
import { IonContent, IonIcon } from '@ionic/react';
import { chevronBackSharp, chevronForward, handLeft, handRight, star } from 'ionicons/icons';
import { useHistory } from 'react-router';
import API_DOMAIN from '../../config/config';

const FormulaireCreerAnnonce3: React.FC = () => {
  const history = useHistory();
  const [commissionData,setCommissionData] = useState(0);
  const [commission,setCommission] = useState<number>(0);
  const [etatPrix,setEtatPrix] = useState(false);
  const [priceAnnonce,setPriceAnnonce] = useState<number>(0);
  function convertirEnMontant(nombre:number) {
     // Vérifiez si le nombre est un nombre entier
     if (!Number.isFinite(nombre)) {
      nombre =  0; // Retourne 0 si le nombre est infini
    }
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
          'Authorization': `Bearer ${localStorage.getItem("token")}`
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
    history.push("/formulaireTwo");
  }
  const handleNextEtape = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rafraîchissement de la page par défaut

    if (priceAnnonce==0) {
      setEtatPrix(true)
    }else{
      localStorage.setItem('commission',commissionData+"")
      localStorage.setItem('prix',priceAnnonce+"")
      localStorage.setItem('couleur',colorData.substring(1)+"")
      localStorage.setItem('anne_modification',dateData+"")
      localStorage.setItem('consommation',consommationData+"")

      history.push("/finishEtapeCreationAnnonce")
    }
  }
  const handleMontantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEtatPrix(false)
    setCommission(parseFloat(e.target.value))
    fetchCommissionData()
    setPriceAnnonce(parseFloat(e.target.value))
    if (parseFloat(e.target.value)==null || isNaN(parseFloat(e.target.value))) {
      setCommission(0)
      setPriceAnnonce(0)
    }
  }
  const [colorData,setColorData] = useState('000000');
  const [dateData,setDateData] = useState('2000-01-01');
  const [consommationData,setConsommationData] = useState('0');

  return (
    <IonContent>
    <div className="container-formulaire-creer-annonce-2 mt-5">
    <form className="row g-3 needs-validation" noValidate onSubmit={handleNextEtape}>
    <h1>Etape 3 : Entrer le montant du vente</h1>
    
    <div className="col-md">
    <div className="form-floating">
    <div className="form-floating mb-3">
    <small>Couleur</small>
    <input type="color" className={'form-control'} id="floatingInputColor" value={colorData} onChange={(e) => setColorData(e.target.value)} placeholder=""/>
    <small>Anne modification</small>
    <input type="date" className={'form-control'} id="floatingInputAnne" value={dateData} onChange={(e) => setDateData(e.target.value)} placeholder=""/>
    <small>Consommation</small>
    <input type="number" className={'form-control'} id="floatingInputAnne" value={consommationData} onChange={(e) => setConsommationData(e.target.value)} placeholder=""/>
    <small>Montant en ariary</small>
    <input type="number" className={etatPrix?'form-control is-invalid':'form-control'} id="floatingInputMontant" onChange={handleMontantChange} placeholder=""/>
</div>
    </div>
    <p>{commission==0?'Pas de commission':'Commission de ce prix : '.concat(convertirEnMontant(priceAnnonce/commissionData))}</p>
    </div>
      <div className="col-12">
          <button className="btn btn-primary btn-prev" onClick={handlePrevEtape}> <IonIcon icon={chevronBackSharp} />Precedent</button>
          <button className="btn btn-primary btn-next" type='submit'>Suivant<IonIcon icon={chevronForward} /></button>
      </div>
    </form>
  </div>
  </IonContent>
  );
};

export default FormulaireCreerAnnonce3;
