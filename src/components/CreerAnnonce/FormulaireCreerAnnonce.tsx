import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/FormulaireCreerAnnonce.css'
import { IonIcon } from '@ionic/react';
import { chevronForward, handRight, star } from 'ionicons/icons';
import API_DOMAIN from '../../config/config';
import { useHistory } from 'react-router';

const FormulaireCreerAnnonce: React.FC = () => {
    const history = useHistory();
    const [marqueData, setMarqueData] = useState<any>([]);
    const [categorieData, setCategorieData] = useState<any>([]);
    const [typeCarburantData, setTypeCarburantData] = useState<any>([]);
    const [transmissonData, setTransmissionData] = useState<any>([]);
    const [freinageData, setFreinageData] = useState<any>([]);


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
        const response = await fetch(`${API_DOMAIN}/marques`, {
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_DOMAIN}/categories`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.object);
            setCategorieData(data.object);
          }
        
      } catch (error) {
        console.error('Erreur lors de la demande au serveur:', error);
      }
    };
  
    fetchData();
  
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_DOMAIN}/types-carburant`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.object);
            setTypeCarburantData(data.object);
          }
        
      } catch (error) {
        console.error('Erreur lors de la demande au serveur:', error);
      }
    };
  
    fetchData();
  
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_DOMAIN}/transmissions`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.object);
            setTransmissionData(data.object);
          }
        
      } catch (error) {
        console.error('Erreur lors de la demande au serveur:', error);
      }
    };
  
    fetchData();
  
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_DOMAIN}/freinages`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.object);
            setFreinageData(data.object);
          }
        
      } catch (error) {
        console.error('Erreur lors de la demande au serveur:', error);
      }
    };
  
    fetchData();
  
  }, []);

  const handleMarqueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMarque(e.target.value);
    setFormIncomplet(false);
    setEtatSelectMarque(true);
  };

  const handleCategorieChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategorie(e.target.value);
    setFormIncomplet(false);
    setEtatSelectCategorie(true);
  };
  const handleTypeCarburantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeCarburant(e.target.value);
    setFormIncomplet(false);
    setEtatSelectTypeCarburant(true);
  };
  const handleTransmissionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTransmission(e.target.value);
    setFormIncomplet(false);
    setEtatSelectTransmission(true)
  };
  const handleFreinageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFreinage(e.target.value);
    setFormIncomplet(false);
    setEtatSelectFreinage(true);
  };

  const [etatSelectMarque,setEtatSelectMarque] = useState(true);
  const [etatSelectCategorie,setEtatSelectCategorie] = useState(true);
  const [etatSelectTypeCarburant,setEtatSelectTypeCarburant] = useState(true);
  const [etatSelectTransmission,setEtatSelectTransmission] = useState(true);
  const [etatSelectFreinage,setEtatSelectFreinage] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajoutez votre logique de soumission ici
    console.log('Marque:', marque);
    console.log('Categorie:', categorie);
    console.log('type carburant:',typeCarburant);
    console.log('transmission:', transmission);
    console.log('Freinage', freinage);
    if (marque.length==0 ||
      categorie.length==0 ||
      typeCarburant.length==0 ||
      transmission.length==0 ||
      freinage.length==0
      ) {
        marque.length==0?setEtatSelectMarque(false):''
        categorie.length==0?setEtatSelectCategorie(false):''
        typeCarburant.length==0?setEtatSelectTypeCarburant(false):''
        transmission.length==0?setEtatSelectTransmission(false):''
        freinage.length==0? setEtatSelectFreinage(false):''
        setFormIncomplet(true)
    }else{
      history.push('/formulaireTwo');
    }
  };

  const [formIncomplete,setFormIncomplet] = useState(false);

  const errorStyle = {
    padding:'10px',
    color:'red',
    borderRadius:'5px',
    border:'2px solid red'
  }
  return (
    <div className="container-formulaire-creer-annonce mt-5">
      <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
      <h1>Etape 1 : Ajouter les elements de voiture</h1>
      {formIncomplete ? 
      <center>
        <p style={errorStyle}> information incomplete </p> 
      </center>
      : ''
      }

      
      <div className="col-md">
        <div className="form-floating">
          <select 
          id="marque"
          value={marque}
          onChange={handleMarqueChange}
          required
          className={etatSelectMarque ? "form-select" : "form-select is-invalid" } itemID="floatingSelectGrid" aria-label="Floating label select example">
              <option value="">Choisir ...</option>
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
          className={etatSelectCategorie ? "form-select" : "form-select is-invalid" }
          id="marque"
          value={categorie}
          onChange={handleCategorieChange}
          required
          itemID="floatingSelectGrid" aria-label="Floating label select example">
            <option value="">Choisir ...</option>
            {categorieData?.map((element:any) => (
              <option value={element.id}>{element.nom}</option>
            ))} 
          </select>
          <label htmlFor="floatingSelectGrid">Categorie</label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <select 
          className={etatSelectTypeCarburant ? "form-select" : "form-select is-invalid" }
          id="marque"
          value={typeCarburant}
          onChange={handleTypeCarburantChange}
          required
          itemID="floatingSelectGrid" aria-label="Floating label select example">
            <option value="">Choisir ...</option>
            {typeCarburantData?.map((element:any) => (
              <option value={element.id}>{element.nom}</option>
            ))} 
          </select>
          <label htmlFor="floatingSelectGrid">Type carburant</label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <select 
          className={etatSelectTransmission ? "form-select" : "form-select is-invalid" }
          id="marque"
          value={transmission}
          onChange={handleTransmissionChange}
          required
          itemID="floatingSelectGrid" aria-label="Floating label select example">
              <option value="">Choisir ...</option>
            {transmissonData?.map((element:any) => (
              <option value={element.id}>{element.nom}</option>
            ))}
          </select>
          <label htmlFor="floatingSelectGrid">Transmission</label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <select 
          className={etatSelectFreinage ? "form-select" : "form-select is-invalid" }
          id="marque"
          value={freinage}
          onChange={handleFreinageChange}
          required
          itemID="floatingSelectGrid" aria-label="Floating label select example">
            <option value="">Choisir ...</option>
            {freinageData?.map((element:any) => (
              <option value={element.id}>{element.nom}</option>
            ))}
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
