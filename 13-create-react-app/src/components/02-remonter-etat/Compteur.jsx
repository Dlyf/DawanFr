import React from 'react';
import ChildCompteur from './ChildCompteur';

class Compteur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compteur: 0
        };
    }
    render() {
        return(
            <>
                <h1>
                    Compteur: { this.state.compteur}
                </h1>
                <ChildCompteur myValeur={this.state.compteur}/>
            </>
        );
    }
}
export default Compteur;