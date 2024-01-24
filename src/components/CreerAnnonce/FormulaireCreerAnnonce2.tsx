import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/FormulaireCreerAnnonce.css'
import { IonIcon } from '@ionic/react';
import { chevronBackSharp, chevronForward, handLeft, handRight, star } from 'ionicons/icons';
import { useHistory } from 'react-router';

const FormulaireCreerAnnonce2: React.FC = () => {
  const history = useHistory();
  const handlePrevEtape = () => {
    history.push("/formulaireOne");
  }
  return (
    <div className="container-formulaire-creer-annonce mt-5">
    <form className="row g-3 needs-validation" noValidate>
    <h1>Etape 2 : Cocher tout les caracteristique correspondant</h1>
    
    <div className="col-md">
      
    </div>
      <div className="col-12">
          <button className="btn btn-primary btn-next" onClick={handlePrevEtape}>Precedent     <IonIcon icon={chevronBackSharp} /></button>
          <button className="btn btn-primary btn-next" type="submit">Suivant     <IonIcon icon={chevronForward} /></button>
      </div>
    </form>
  </div>
  );
};

export default FormulaireCreerAnnonce2;
