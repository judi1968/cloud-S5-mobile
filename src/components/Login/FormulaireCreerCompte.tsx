// Formulaire.tsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer la feuille de style Bootstrap
import './../assets/css/Formulaire.css';

const FormulaireCreerCompte: React.FC = () => {
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
  };

  return (
    <div className="container mt-5">
        <center>
            <h1>Creer votre compte</h1>
        </center>
      <form>
      <div>
        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Nom d'utilisateur</label>
        </div>
        <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Mot de passe</label>
        </div>
        </div>
        <div className="text-center">
          <button  type="button" className="btn btn-success col-12" onClick={handleLogin}>
            Creer
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormulaireCreerCompte;
