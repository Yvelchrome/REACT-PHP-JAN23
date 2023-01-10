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
  const toggleSignup = () => {
    // Si le formulaire d'inscription est affiché, afficher le formulaire de connexion
    // Sinon, afficher le formulaire d'inscription
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };
 
  // Composant de connexion/inscription
const Login = ({ isUserAuthenticated }) => {
  // État du formulaire de connexion
  const [login, setLogin] = useState(loginInitialValues);
  // État du formulaire d'inscription
  const [signup, setSignup] = useState(signupInitialValues);
  // État du message d'erreur
  const [error, showError] = useState('');
 
  // Hook pour naviguer entre les pages
  const navigate = useNavigate();
  // Hook pour accéder aux données de l'utilisateur dans le contexte
  const { setAccount } = useContext(DataContext);

  
  // Réinitialiser le message d'erreur lorsque les valeurs du formulaire de connexion sont mises à jour
  useEffect(() => {
      showError(false);
  }, [login])

  // Gestionnaire d'événement pour changer les valeurs du formulaire de connexion
  const onValueChange = (e) => {
      setLogin({ ...login, [e.target.name]: e.target.value });
  }

  // Gestionnaire d'événement pour changer les valeurs du formulaire d'inscription
const onInputChange = (e) => {
  // Mise à jour de l'état du formulaire d'inscription avec la valeur saisie par l'utilisateur
  setSignup({ ...signup, [e.target.name]: e.target.value });
}
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
              <button onClick={() => toggleSignup()} className={style.change}>
                Inscription
              </button>
            </div>
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
            />
            <input 
              type="text" 
              name="surname" 
              id="surname" 
              placeholder="surname" 
            />
            {/* // Champ de saisie pour le nom d'utilisateur */}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
            />
            {/* // Champ de saisie pour le mot de passe */}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
            />
            {/* // Bouton de soumission du formulaire d'inscription */}
            <button type="submit">Inscription</button>
            {/* // Div qui permet de basculer vers la vue de connexion */}
            <div className={style.create}>
              <p className={style.text}>OU</p>
              {/* // Bouton de basculement vers la vue de connexion */}
              <button onClick={() => toggleSignup()} className={style.change}>
                Connexion
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
