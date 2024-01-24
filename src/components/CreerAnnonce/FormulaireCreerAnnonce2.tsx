import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/FormulaireCreerAnnonce.css'
import { IonIcon } from '@ionic/react';
import { chevronBackSharp, chevronForward, handLeft, handRight, star } from 'ionicons/icons';
import { useHistory } from 'react-router';
import API_DOMAIN from '../../config/config';

const FormulaireCreerAnnonce2: React.FC = () => {
  const history = useHistory();
  const handlePrevEtape = () => {
    history.push("/formulaireOne");
  }
  const handleNextEtape = () => {
    history.push("formulaireThree")
  }
  const [equipementInterne,setEquipementInterne] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_DOMAIN}/equipements-internes`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.object);
            setEquipementInterne(data.object);
          }
        
      } catch (error) {
        console.error('Erreur lors de la demande au serveur:', error);
      }
    };
  
    fetchData();
  
  }, []);
  return (
    <div className="container-formulaire-creer-annonce-2 mt-5">
    <form className="row g-3 needs-validation" noValidate>
    <h1>Etape 2 : Cocher tout les caracteristique correspondant</h1>
    
    <div className="col-md-12">
        { 
      equipementInterne?.map((element: any, index: number) => ( 
        <div className="form-check" key={element.id}>
          <input className="form-check-input col-3" type="checkbox" value={element.id} id={`flexCheckDefault_${index}`}></input>
          <label className="form-check-label col-9" htmlFor={`flexCheckDefault_${index}`}>
            {element.nom}
          </label>
        </div>
      ))} 

    </div>
      <div className="col-12">
          <button className="btn btn-primary btn-prev" onClick={handlePrevEtape}> <IonIcon icon={chevronBackSharp} />Precedent</button>
          <button className="btn btn-primary btn-next" type="submit" onClick={handleNextEtape}>Suivant<IonIcon icon={chevronForward} /></button>
      </div>
    </form>
  </div>
  );
};

export default FormulaireCreerAnnonce2;
