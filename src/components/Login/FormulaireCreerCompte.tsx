// Formulaire.tsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Formulaire.css';
import axios from 'axios';

const FormulaireCreerCompte: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/votre-endpoint', {
        username,
        password,
      });
      console.log('Réponse du serveur:', response.data);
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
    }
  };

  return (
    <div className="container mt-5">
      <center>
        <h1>Créer votre compte</h1>
      </center>
      <form>
        <div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={handleUsernameChange}
            />
            <label htmlFor="floatingInput">Nom d'utilisateur</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            <label htmlFor="floatingPassword">Mot de passe</label>
          </div>
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-success col-12" onClick={handleLogin}>
            Créer
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormulaireCreerCompte;
