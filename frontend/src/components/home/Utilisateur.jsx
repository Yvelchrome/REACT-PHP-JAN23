import React from "react";
import style from "./Utilisateur.module.scss";
const Utilisateur = ({ toggleAccount }) => {
  return (
    <div className={style.container}>
      <div className={style.compt}>Créer des comptes (Etape 1 sur 2)</div>
      <div className={style.container_title}>
        Listez les personnes qui participent aux comptes{" "}
      </div>

      <div className={style.container_form_left}>
        <div className={style.root}>
          <div></div>
          <div></div>
        </div>

        <div></div>

        {/* <div className={style.container_button}>
                    <button onClick={() =>  toggleAccount("utilisateur")}> Continuer</button>
                </div> */}
      </div>
    </div>
  );
};

export default Utilisateur;
