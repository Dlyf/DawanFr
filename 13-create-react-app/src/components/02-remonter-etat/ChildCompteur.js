import React from 'react';
import DeepChild from './DeepChild';

function ChildCompteur(props) {
    return (
        <React.Fragment>
            <h2>
                Child Compteur: {props.myValeur}
            </h2>
            <DeepChild 
                childIncrementer={props.myIncrementer}  
                childValeur={props.myValeur}    
            />
        </React.Fragment>
    );
}
export default ChildCompteur;