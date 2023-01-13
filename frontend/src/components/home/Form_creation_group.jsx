import React from 'react';
import style from './Form_creation_group.module.scss';
const form_creation_group = ({toggleAccount}) => {
   
    return (
        <div className={style.container}>
            <div className={style.compt}>
                Créer des comptes (Etape 1 sur 2)
            </div>
            <div className={style.container_title}>
            Choisissez un titre explicite et donnez plus d'informations dans la description
            </div>

            <div className={style.container_form_left}>
                <div>
                    <label htmlFor="title" className={style.title}>Title :</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Title"
                            //   value={formData.email}
                        />
                     
                </div>
                
                <div>
                    <label htmlFor="nom">Nom :</label>
                    <input
                        type="text"
                        name="nom"
                        id="nom"
                        placeholder="Votre nom"
                        // value={formData.password}
                    />
                    
               </div>
                <div>
                    <label htmlFor="prix">Prenom :</label>
                    <input
                        type="number"
                        name="prix"
                        id="prix"
                        placeholder="Prix"
                        //value={formData.password}
                    />
                 </div>   
                
                <div className={style.description}>
                    <label htmlFor="description" className={style.description_label}>Description :</label>
                    <textarea placeholder="description" className={style.description}></textarea>
                    <div className={style.button}>

                    <button onClick={() =>  toggleAccount("utilisateur")}> Continuer</button>
                    </div>
                </div> 
                {/* <div className={style.container_button}>
                    <button onClick={() =>  toggleAccount("utilisateur")}> Continuer</button>
                </div> */}
                
            </div>    
               
        </div>        

    );
};

export default form_creation_group;