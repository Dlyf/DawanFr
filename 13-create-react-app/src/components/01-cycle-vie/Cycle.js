import React, { Component } from 'react';

class CycleVie extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        console.log("Composant Monté");
    }

    componentDidUpdate() {
        console.log("Mis à jour");
    }

    componentWillUnmount() {
        console.log("Demontage du composant");
    }
    
    render() {
        return(
            // Syntaxe raccourcie pour React.Fragment
            <>

            </>
        );
    }
}
export default CycleVie;