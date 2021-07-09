import React from 'react';
import { connect } from 'react-redux';

function ReduxCompteur(props) {
    return (
        <React.Fragment>
            <h1>Compteur: {props.myCompteur}</h1>
            <button onClick={null}>
                Incrementer
            </button>
        </React.Fragment>
    );
}

/**
 * Ajouter les variables de l'etat global (store)
 * dans les props du composants.
 * 2 parametres: 
 *      - state: le state du store
 *      - ownProps: les props du composants.
 */
function mapStateToProps(state, componentProps) {
    console.log("State: ", state);
    console.log("Les props du composants: ", componentProps);
    const nouvellesProps = {
        myCompteur: state.compteur
    }
    return nouvellesProps;
}

/**
 * connect(): prend en parametre la fonction qui permet de fusionner le state et les props
 * et renvoie une fonction qui permet de connecter le composant de notre choix.
 */
const composantAConnecter = connect(mapStateToProps);
const connectedComponent = composantAConnecter(ReduxCompteur);
// export default ReduxCompteur;
export default connectedComponent;