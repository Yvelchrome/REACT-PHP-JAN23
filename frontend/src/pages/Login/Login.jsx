import React, { useState } from "react";
import style from "./Login.module.scss";
export default function Login() {
  const [account, toggleAccount] = useState("login");
// Valeurs initiales du formulaire de connexion
const loginInitialValues = {
  email: '', // Nom d'utilisateur
  password: '' // Mot de passe
};

// Valeurs initiales du formulaire d'inscription
const signupInitialValues = {
  name: '', // Nom
  surname: '', // Nom d'utilisateur
  email: '', // Mot de passe
  password: '' // Mot de passe
};
  
  // Composant de connexion/inscription

  // État du formulaire de connexion
  const [login, setLogin] = useState(loginInitialValues);
  // État du formulaire d'inscription
  const [signup, setSignup] = useState(signupInitialValues);
  // État du message d'erreur
  const [error, showError] = useState('');

 
  // Gestionnaire d'événement pour changer les valeurs du formulaire de connexion
  const onValueChange = (e) => {

  console.log(e.target.value)
      setSignup({ ...signup, [e.target.name]: e.target.value });
  }


  // Gestionnaire d'événement pour changer les valeurs du formulaire d'inscription
const onInputChange = (e) => {
  // Mise à jour de l'état du formulaire d'inscription avec la valeur saisie par l'utilisateur
  setSignup({...signup, [e.target.name]: e.target.value });
}

  return (
    <div className={style.container}>
      {account === "login" ? (
        // Si on est sur la vue de connexion, on affiche le formulaire de connexion
        <div className={style.form}>
          <h1 className={style.title}>Avez-vous un compte ?</h1>
          <div className={style.inputContainer}>
            {/* // Champ de saisie pour le nom d'utilisateur */}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              value={login.email} onChange={(e) => onValueChange(e)}
            />
            {/* // Champ de saisie pour le mot de passe */}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              value={login.password} onChange={(e) => onValueChange(e)}
            />
            {/* // Bouton de soumission du formulaire */}
            <button type="submit">Connexion</button>

            {/* // Div qui permet de basculer vers la vue d'inscription */}
            <div className={style.create}>
              <p className={style.text}>OU</p>
              {/* // Bouton de basculement vers la vue d'inscription */}
              <button onClick={toggleAccount('')} className={style.change}>
                Inscription
              </button>
            </div>
            {login.password}
            {login.email}
          </div>
        </div>
      ) : (
        <div className={style.form}>
          {/* // Titre du formulaire d'inscription */}
          <h1 className={style.title}>Créer un compte</h1>
          <div className={style.inputContainer}>
            {/* // Champ de saisie pour le nom */}
            <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Nom" 
              onChange={(e) => onInputChange(e)}
            />
            <input 
              type="text" 
              name="surname" 
              id="surname" 
              placeholder="surname" 
              onChange={(e) => onInputChange(e)}
            />
            {/* // Champ de saisie pour le nom d'utilisateur */}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              onChange={(e) => onInputChange(e)}
            />
            {/* // Champ de saisie pour le mot de passe */}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              onChange={(e) => onInputChange(e)}
            />
            {/* // Bouton de soumission du formulaire d'inscription */}
            <button type="submit">Inscription</button>
            {/* // Div qui permet de basculer vers la vue de connexion */}
            <div className={style.create}>
              <p className={style.text}>OU</p>
              {/* // Bouton de basculement vers la vue de connexion */}
              <button onClick={toggleAccount('login')} className={style.change}>
                Connexion
              </button>

            </div>
            {signup.name}
            {signup.password}
            {signup.email}
            {signup.surname}
          </div>
        </div>
      )}
    </div>
  );
      }
    

