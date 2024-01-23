import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/FormulaireCreerAnnonce.css'
import { IonIcon } from '@ionic/react';
import { chevronForward, handRight, star } from 'ionicons/icons';

const FormulaireCreerAnnonce: React.FC = () => {
    const [marqueData, setMarqueData] = useState<any>([]);


    const [marque, setMarque] = useState('');
    const [categorie, setCategorie] = useState('');
    const [typeCarburant, setTypeCarburant] = useState('');
    const [transmission, setTransmission] = useState('');
    const [freinage, setFreinage] = useState('');
    
    const [prix, setPrix] = useState<number | string>('');
    const [commission, setCommission] = useState<number | string>('');
    const [description, setDescription] = useState('');

  // initialisation des donnes 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cloud-s5-metier-production.up.railway.app/marques', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.object);
            setMarqueData(data.object);
          }
        
      } catch (error) {
        console.error('Erreur lors de la demande au serveur:', error);
      }
    };
  
    fetchData();
  
  }, []);

  const handleMarqueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMarque(e.target.value);
  };

  const handleCategorieChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategorie(e.target.value);
  };
  const handleTypeCarburantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeCarburant(e.target.value);
  };
  const handleTransmissionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTransmission(e.target.value);
  };
  const handleFreinageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFreinage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajoutez votre logique de soumission ici
    console.log('Marque:', marque);
    console.log('Categorie:', categorie);
    console.log('type carburant:',typeCarburant);
    console.log('transmission:', transmission);
    console.log('Freinage', freinage);
  };


  return (
    <div className="container-formulaire-creer-annonce mt-5">
      <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
      <h1>Ajouter les elements de voiture</h1>
      <div className="col-md">
        <div className="form-floating">
          <select 
          id="marque"
          value={marque}
          onChange={handleMarqueChange}
          required
          className="form-select" itemID="floatingSelectGrid" aria-label="Floating label select example">
            <option selected>Audi</option>
             {marqueData?.map((element:any) => (
              <option value={element.id}>{element.nom}</option>
            ))} 
          </select>
          <label htmlFor="floatingSelectGrid">Marque</label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <select 
          className="form-select"
          id="marque"
          value={categorie}
          onChange={handleCategorieChange}
          required
          itemID="floatingSelectGrid" aria-label="Floating label select example">
            <option selected>Q5</option>
            <option value="2">Q6</option>
            <option value="3">Q7</option>
          </select>
          <label htmlFor="floatingSelectGrid">Categorie</label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <select 
          className="form-select"
          id="marque"
          value={typeCarburant}
          onChange={handleTypeCarburantChange}
          required
          itemID="floatingSelectGrid" aria-label="Floating label select example">
            <option selected>carbu 1</option>
            <option value="2">carbu 2</option>
            <option value="3">carbu 3</option>
          </select>
          <label htmlFor="floatingSelectGrid">Type carburant</label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <select 
          className="form-select"
          id="marque"
          value={transmission}
          onChange={handleTransmissionChange}
          required
          itemID="floatingSelectGrid" aria-label="Floating label select example">
            <option selected>trans 1</option>
            <option value="2">trans 2</option>
            <option value="3">trans 3</option>
          </select>
          <label htmlFor="floatingSelectGrid">Transmission</label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <select 
          className="form-select"
          id="marque"
          value={freinage}
          onChange={handleFreinageChange}
          required
          itemID="floatingSelectGrid" aria-label="Floating label select example">
            <option selected>frein 1</option>
            <option value="2">frein 2</option>
            <option value="3">frein 3</option>
          </select>
          <label htmlFor="floatingSelectGrid">Freinage</label>
        </div>
      </div>

        <div className="col-12">
            <button className="btn btn-primary btn-next" type="submit">Suivant     <IonIcon icon={chevronForward} /></button>
        </div>
      </form>
    </div>
  );
};

export default FormulaireCreerAnnonce;
