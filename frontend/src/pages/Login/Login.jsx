import React, { useState } from "react";
import style from "./Login.module.scss";
export default function Login() {
  const [account, toggleAccount] = useState("login");

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const handleClick = (event) =>{
    //retirer le comportement par défaut du formulaire
    event.preventDefault();
    // On convertit les données de l'état en chaîne JSON
    
    // On envoie les données au serveur
     const options = {
       method: 'POST', // configuration de la méthode de requête en POST
       headers: { 'Content-Type': 'application/json' }, // configuration du type de contenu dans les en-têtes de la requête en JSON
       body: JSON.stringify(formData) // conversion de l'objet data en chaine pour l'inclure dans le corps de la requête
     };
     // On envoie la requête
     fetch('http://backend/register', options)
       .then(response => response.json()) // analyse de la réponse JSON
       .then(response => console.log(response)) // affiche les données obtenues
       .catch(error => console.error('Error:', error)); // gère les erreurs éventuelles lors de la requête
     
    //
    toggleAccount('login');
    
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const toggleSignup = () => {
    console.log("toggle");
  };
  
  return (
    <div className={style.container}>
      <div className={style.container_image}>
        
      </div>
      {account === "login" ? (
        <form className={style.form_container}>
          <h1 className={style.title}>Avez-vous un compte ?</h1>
          <div className={style.inputContainer}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit" onClick={(event) => handleClick(event) }>Connexion</button>
            <div className={style.create}>
              <p className={style.text}>OU</p>
              <button
                onClick={() => toggleAccount("")}
                className={style.change}
              >
                Inscription
              </button>
            </div>
          </div>
        </form>
      ) : (
        <form className={style.form_container}>
          <h1 className={style.title}>Créer un compte</h1>
          <div className={style.inputContainer}>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              placeholder="Nom"
              onChange={handleChange}
            />
            <input
              type="text"
              name="surname"
              id="surname"
              value={formData.surname}
              placeholder="surname"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              placeholder="email"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              placeholder="Mot de passe"
              onChange={handleChange}
            />
            <button type="submit" 
             onClick={(event) => handleClick(event) }
            >
              Inscription
            </button>
            <div className={style.create}>
              <p className={style.text}>OU</p>
              <button
                onClick={() => toggleSignup() }
                
                className={style.change}
              >
                Connexion
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
