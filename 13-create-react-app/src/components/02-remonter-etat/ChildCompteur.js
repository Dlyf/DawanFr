import React from 'react';
import DeepChild from './DeepChild';

function ChildCompteur(props) {
    return (
        <React.Fragment>
            <h2>
                Child Compteur: {props.myValeur}
            </h2>
            <DeepChild/>
        </React.Fragment>
    );
}
export default ChildCompteur;