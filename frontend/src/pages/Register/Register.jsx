import style from "../Register/Register.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
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

    fetch("http://localhost:5656/register", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((data) => data.json())
      .then((data) => console.log(data));
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
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
