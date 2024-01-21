// Formulaire.tsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Formulaire.css';
import axios from 'axios';
import API_DOMAIN from '../../config/config';
import { useHistory } from 'react-router';

const Formulaire: React.FC = () => {
  const history = useHistory();
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
      const response = await axios.post(
        `${API_DOMAIN}/authentification_client`,
        {
          username,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.status === 200) {
        // Authentification réussie, naviguez vers la page souhaitée
        history.push('/rooter_page');
      } else {
        // Gestion des erreurs d'authentification
        console.error('Échec de l\'authentification:', response.data.message);
      }
    } catch (error: any) {
      console.error('Erreur lors de la requête:', error.message);
    }
  };

  return (
    <div className="container mt-5">
      <img src="%PUBLIC_URL%/../assets/images/logo/logo_trial rgba(a0).png" alt="logo du VaikaNet" />
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
        <div className="text-center ">
          <button
            type="button"
            className="col-12 btn btn-primary"
            onClick={handleLogin}
          >
            Connexion
          </button>
        </div>
        <br />
        <p>
          Si vous n'avez pas de compte, cliquez sur{' '}
          <a href="/creer_compte" className="">
            Créer un nouveau compte
          </a>
        </p>
      </form>
    </div>
  );
};

export default Formulaire;
