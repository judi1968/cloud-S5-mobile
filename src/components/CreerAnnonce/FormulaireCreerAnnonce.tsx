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
    setPrix(e.target.value);
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
      <center>
        <h1>Créer votre compte</h1>
      </center>
      <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="marque" className="form-label">Marque de la voiture</label>
          <select
            className="form-select"
            id="marque"
            value={marque}
            onChange={handleMarqueChange}
            required
          >
            <option value="">Choisir...</option>
            {/* Ajoutez d'autres options de marque selon vos besoins */}
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            {/* ... */}
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="type" className="form-label">Type</label>
          <select
            className="form-select"
            id="type"
            value={type}
            onChange={handleTypeChange}
            required
          >
            <option value="">Choisir...</option>
            {/* Ajoutez d'autres options de type selon vos besoins */}
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            {/* ... */}
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="prix" className="form-label">Prix</label>
          <input
            type="number"
            className="form-control"
            id="prix"
            value={prix}
            onChange={handlePrixChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="commission" className="form-label">Commission proposée (en %)</label>
          <input
            type="number"
            className="form-control"
            id="commission"
            value={commission}
            onChange={handleCommissionChange}
            required
          />
          <small className="text-muted">Veuillez entrer un nombre entre 0 et 100</small>
        </div>
        <div className="col-12">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Soumettre le formulaire</button>
        </div>
      </form>
    </div>
  );
};

export default FormulaireCreerAnnonce;
