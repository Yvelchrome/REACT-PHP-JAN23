import { useState } from "react";
import style from "./Login.module.scss";
import { Link } from "react-router-dom";
export default function Login() {
  const [formData, setFormData] = useState({
    mail: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST', // configuration de la méthode de requête en POST
      headers: { 'Content-Type': 'application/json' }, // configuration du type de contenu dans les en-têtes de la requête en JSON
      body: JSON.stringify(formData) // conversion de l'objet data en chaine pour l'inclure dans le corps de la requête
    };
    fetch("http://localhost:5656/login", options)
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.title}>Avez-vous un compte ?</h1>
        <div className={style.inputContainer}>
          <input
            type="email"
            name="mail"
            placeholder="email"
            value={formData.mail}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
          />
          <button>Connexion</button>
          <div className={style.create}>
            <p className={style.text}>OU</p>
            <Link to={"/register"} className={style.change}>
              Inscription
            </Link>
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
        </div>
      </form>
    </div>
  );
}
