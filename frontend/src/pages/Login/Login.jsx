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

    fetch("http://localhost:5656/login", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((data) => data.json())
      .then((data) => console.log(data));
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
          </div>
        </div>
      </form>
    </div>
  );
}
