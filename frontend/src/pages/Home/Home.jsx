import React, { useState } from 'react';
import style from './Home.module.scss';
import Form_creation_group from '../../components/home/Form_creation_group.jsx';
import Depenses from '../../components/home/Depenses.jsx';
import Utilisateur from '../../components/home/Utilisateur.jsx';
const Home = () => {
    const [account, toggleAccount] = useState("form");

    console.log(account);

    return (
        <div className={style.container} >
            <div className={style.container_page} >
            {(() => {
            if (account === "form") {
                
                return <Form_creation_group toggleAccount={toggleAccount}/>;
            } else if (account === "utilisateur") {
                return <Utilisateur toggleAccount={toggleAccount}/>;
            } else {
                return <Depenses />
            }
            })()}
            </div>
           
        </div>
    );
};

export default Home;