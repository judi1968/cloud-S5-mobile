// Formulaire.tsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Formulaire.css';
import axios from 'axios';
import API_DOMAIN from '../../config/config';
import { useHistory } from 'react-router';

const Formulaire: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState('vaikanet@client.com');
  const [password, setPassword] = useState('client');
  const [errorMessage, setErrorMessage] = useState('');
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
      setErrorMessage('');

      const response = await axios.post(
        `${API_DOMAIN}/loginClient`,
        {
          'email':username,
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
        
        localStorage.setItem("token", response.data.tknidclient);
        // Récupérez le token du localStorage
        const storedToken = localStorage.getItem("token");

        // Utilisez le token comme nécessaire
        console.log("Token récupéré :", storedToken);

        history.push('/rooter_page');
      }else{
        // Gestion des erreurs d'authentification
        setErrorMessage(response.data.message);
      }
    } catch (error: any) {
      // Gestion des erreurs réseau ou autres
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
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
              value={username}
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
              value={password}
            />
            <label htmlFor="floatingPassword">Mot de passe</label>
          </div>
        </div>
        <div className="text-center ">
          <button
            type="button"
            className="col-12 btn btn-primary"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Connexion en cours...' : 'Connexion'}
          </button>
        </div>
        <br />
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
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
