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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <div className={style.container}>
      {account === "login" ? (
        <form className={style.form}>
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
            <button type="submit">Connexion</button>
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
        <form className={style.form}>
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
            <button type="submit">Inscription</button>
            <div className={style.create}>
              <p className={style.text}>OU</p>
              <button
                onClick={() => toggleAccount("login")}
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
