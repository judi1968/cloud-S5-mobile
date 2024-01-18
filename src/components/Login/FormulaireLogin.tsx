// Formulaire.tsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer la feuille de style Bootstrap
import './../assets/css/Formulaire.css';
import { useHistory } from 'react-router';

const Formulaire: React.FC = () => {
  const history = useHistory();

  // Fonction de gestion du clic sur le lien
  const handleLinkClick = () => {
    // Utilisez history.push pour naviguer vers la page désirée
    history.push('/home');
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    handleLinkClick();
  };

  return (
    <div className="container mt-5">
      <img src="%PUBLIC_URL%/../assets/images/logo/logo_trial rgba(a0).png" alt="logo du VaikaNet" />
      <form>
      <div>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Nom d'utlisateur</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Mot de passe</label>
      </div>
    </div>
        <div className="text-center ">
          <button  type="button" className="col-12 btn btn-primary" onClick={handleLogin}>
            Connexion
          </button>
        </div>
        <br />
          <p>Si vous n'avez pas de compte cliquer sur <a href="/creer_compte"  className="">Creer nom nouveau compte</a></p>
      </form>
    </div>
  );
};

export default Formulaire;
