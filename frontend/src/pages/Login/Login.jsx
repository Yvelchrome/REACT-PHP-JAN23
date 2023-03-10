import style from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

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
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    fetch("http://localhost:5656/login", options)
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));

    // TODO: navigate to the home page on successful query + register
    navigate("/");
  };

  return (
    <div className={style.container}>
      <div className={style.container_image}></div>
      <form className={style.form_container} onSubmit={handleSubmit}>
        <h1 className={style.title}>Avez-vous un compte ?</h1>
        <div className={style.inputContainer}>
          <input
            type="email"
            name="mail"
            placeholder="email"
            required
            value={formData.mail}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            required
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
