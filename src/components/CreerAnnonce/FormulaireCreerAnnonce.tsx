import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/FormulaireCreerAnnonce.css'
const FormulaireCreerAnnonce: React.FC = () => {
    const [marque, setMarque] = useState('');
    const [type, setType] = useState('');
    const [prix, setPrix] = useState<number | string>('');
    const [commission, setCommission] = useState<number | string>('');
    const [description, setDescription] = useState('');

  const handleMarqueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMarque(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  const handlePrixChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Assurez-vous que la valeur reste entre 0 et 100
    if (value === '' || (parseFloat(value) >= 0)) {
      setPrix(value);
    }
    
  };

  const handleCommissionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Assurez-vous que la valeur reste entre 0 et 100
    if (value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 100)) {
      setCommission(value);
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajoutez votre logique de soumission ici
    console.log('Marque:', marque);
    console.log('Type:', type);
    console.log('Prix:', prix);
    console.log('Commission proposée:', commission);
    console.log('Description:', description);
  };


  return (
    <div className="container-formulaire-creer-annonce mt-5">
      
      <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
      <div className="col-md">
        <div className="form-floating">
          <select 
          id="marque"
          value={marque}
          onChange={handleMarqueChange}
          required
          className="form-select" itemID="floatingSelectGrid" aria-label="Floating label select example">
            <option selected>Audi</option>
            <option value="2">Toyota</option>
            <option value="3">Mercedes</option>
          </select>
          <label htmlFor="floatingSelectGrid">Marque</label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <select 
          className="form-select"
          id="marque"
          value={type}
          onChange={handleTypeChange}
          required
          itemID="floatingSelectGrid" aria-label="Floating label select example">
            <option selected>Q5</option>
            <option value="2">Q6</option>
            <option value="3">Q7</option>
          </select>
          <label htmlFor="floatingSelectGrid">Type</label>
        </div>
      </div>
      <div className="form-floating">
        <input type="number"
            className="form-control"
            id="prix"
            value={prix}
            onChange={handlePrixChange}
            required  itemID="floatingPrice" placeholder="Prix"/>
        <label htmlFor="floatingPrice">Prix</label>
      </div>
      <div className="form-floating mb-3">
        <input type="number"
            className="form-control"
            id="commission"
            value={commission}
            onChange={handleCommissionChange}
            required itemID="floatingInput" placeholder="entre 0 a 100"/>
        <label htmlFor="floatingInput">Commission</label>
      </div>
      <div className="form-floating">
        <textarea className="form-control"
            id="description"
            value={description}
            onChange={handleDescriptionChange} placeholder="Mettez ici le description de votre vente" itemID="floatingTextarea2" ></textarea>
        <label htmlFor="floatingTextarea2">Description</label>
      </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Soumettre le formulaire</button>
        </div>
      </form>
    </div>
  );
};

export default FormulaireCreerAnnonce;
