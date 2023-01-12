import style from "./Register.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
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
      method: "POST", // configuration de la méthode de requête en POST
      headers: { "Content-Type": "application/json" }, // configuration du type de contenu dans les en-têtes de la requête en JSON
      body: JSON.stringify(formData), // conversion de l'objet data en chaine pour l'inclure dans le corps de la requête
    };
    fetch("http://localhost:5656/register", options)
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));

    navigate("/login");
  };

  return (
    <div className={style.container}>
      <div className={style.container_image}></div>
      <form className={style.form_container} onSubmit={handleSubmit}>
        <h1 className={style.title}>Créer un compte</h1>
        <div className={style.inputContainer}>
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="surname"
            placeholder="surname"
            value={formData.surname}
            onChange={handleChange}
          />
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
          <button>Inscription</button>
          <div className={style.create}>
            <p className={style.text}>OU</p>
            <Link to={"/login"} className={style.change}>
              Connexion
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
