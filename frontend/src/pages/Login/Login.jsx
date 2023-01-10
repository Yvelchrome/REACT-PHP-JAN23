import React, { useState } from 'react';
import style from './Login.module.scss'
const Login = () => {
    const [account, toggleAccount] = useState('login');
    
    const toggleSignup = () => {
        // Si le formulaire d'inscription est affiché, afficher le formulaire de connexion
        // Sinon, afficher le formulaire d'inscription
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }
    return (
        <div className={style.container}>
            {
        account === 'login' ?
            // Si on est sur la vue de connexion, on affiche le formulaire de connexion
            <div className={style.form}>
                <h1 className={style.title}>Avez-vous un compte ?</h1>
                <div className={style.inputContainer}>
                    {/* // Champ de saisie pour le nom d'utilisateur */}
                    <input type="text" name="username" id="username" placeholder='Username' />                    
                    {/* // Champ de saisie pour le mot de passe */}
                    <input type="password" name="password" id="password" placeholder='Mot de passe' />
                    {/* // Bouton de soumission du formulaire */}
                    <button type="submit"  >Connexion</button>

                    {/* // Div qui permet de basculer vers la vue d'inscription */}
                    <div className={style.create}>
                        <p className={style.text}>OU</p>
                        {/* // Bouton de basculement vers la vue d'inscription */}
                        <button onClick={() => toggleSignup()} className={style.change}>Inscription</button>
                    </div>
                </div>
            </div> :
             <div className={style.form}>
             {/* // Titre du formulaire d'inscription */}
             <h1 className={style.title}>Créer un compte</h1>
             <div className={style.inputContainer}>
                 {/* // Champ de saisie pour le nom */}
                 <input type="text" name="name" id="name" placeholder='Nom'  />
                 {/* // Champ de saisie pour le nom d'utilisateur */}
                 <input type="text" name="username" id="username" placeholder='Username'/>                            
                 {/* // Champ de saisie pour le mot de passe */}
                 <input type="password" name="password" id="password" placeholder='Mot de passe'/>
                 {/* // Bouton de soumission du formulaire d'inscription */}
                 <button type="submit" >Inscription</button>
                 {/* // Div qui permet de basculer vers la vue de connexion */}
                 <div className={style.create}>
                     <p className={style.text}>OU</p>
                     {/* // Bouton de basculement vers la vue de connexion */}
                     <button onClick={() => toggleSignup()} className={style.change} >Connexion</button>
                 </div>
             </div>
         </div>
                 
     }
        
            
        </div>
    );
    };
export default Login;