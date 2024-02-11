// Formulaire.tsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Formulaire.css';
import axios from 'axios';
import API_DOMAIN from './../../config/config'; // Importez la valeur du domaine depuis config.js

const FormulaireCreerCompte: React.FC = () => {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      setMessage('');
      const response = await axios.post(
        `${API_DOMAIN}/create_compte_client`,
        {
          name,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            // Ajoutez les en-têtes CORS nécessaires ici, par exemple :
            // 'Access-Control-Allow-Origin': 'http://localhost:8100',
          },
        }
      );
      if (response.data.status === 500) {
        setMessage(`${response.data.message}`);
      } else {
        setMessage(`Succès: ${response.data.titre}`);
      }
    } catch (error:any) {
      if (error.message === 'Network Error') {
        setMessage('Connection échouée');
      } else {
        setMessage(`Erreur: ${error.message}`);
      }
    } finally{
      setLoading(false)
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
              type="text"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            <label htmlFor="floatingPassword">Mot de passe</label>
          </div>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-success col-12"
            onClick={handleLogin}
          >
           {loading ? 'Création en cours...' : 'Créer'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormulaireCreerCompte;
