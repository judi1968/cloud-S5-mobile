import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/FormulaireCreerAnnonce.css'
import { IonIcon } from '@ionic/react';
import { chevronBackSharp, chevronForward, handLeft, handRight, star } from 'ionicons/icons';
import { useHistory } from 'react-router';
import API_DOMAIN from '../../config/config';

const FormulaireCreerAnnonce3: React.FC = () => {
  const history = useHistory();
  const handlePrevEtape = () => {
    history.push("/formulaireTwo");
  }
  const handleNextEtape = () => {
    
  }
  const [montant,setMontant] = useState('');
  const handleMontantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMontant(e.target.value)
  }
  return (
    <div className="container-formulaire-creer-annonce-2 mt-5">
    <form className="row g-3 needs-validation" noValidate>
    <h1>Etape 3 : Entrer le montant du vente</h1>
    
    <div className="col-md">
    <div className="form-floating">
    <div className="form-floating mb-3">
  <input type="number" className="form-control" id="floatingInput" onChange={handleMontantChange} placeholder=""/>
  <label form="floatingInput" >Montant en ariary</label>
</div>
    </div>
    </div>
      <div className="col-12">
          <button className="btn btn-primary btn-prev" onClick={handlePrevEtape}> <IonIcon icon={chevronBackSharp} />Precedent</button>
          <button className="btn btn-primary btn-next" type="submit" onClick={handleNextEtape}>Suivant<IonIcon icon={chevronForward} /></button>
      </div>
    </form>
  </div>
  );
};

export default FormulaireCreerAnnonce3;
