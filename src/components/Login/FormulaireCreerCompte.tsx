// Formulaire.tsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Formulaire.css';
import axios from 'axios';

const FormulaireCreerCompte: React.FC = () => {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://cloud-s5-metier-production.up.railway.app/create_compte_client',
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

      setMessage(`Succès: ${response.data}`);
    } catch (error) {
      if (error.message === 'Network Error') {
        setMessage('Connection échouée');
      } else {
        setMessage(`Erreur: ${error.message}`);
      }
    }
  };

  return (
    <div className="container mt-5">
      <center>
        <h1>Créer votre compte</h1>
      </center>
      {message && (
        <div className={message.includes('Succès') ? 'alert alert-success' : 'alert alert-danger'}>
          {message}
        </div>
      )}
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
          <button
            type="button"
            className="btn btn-success col-12"
            onClick={handleLogin}
          >
            Créer
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormulaireCreerCompte;
