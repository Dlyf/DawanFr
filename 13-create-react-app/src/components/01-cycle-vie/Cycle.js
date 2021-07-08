import React, { Component } from 'react';

class CycleVie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            message: 'Salut'
        };
    }

    updateDate = () => {
        this.setState({ date: new Date() })
    }

    componentDidMount() {
        console.log("Composant Monté");
        // setInterval: execute la callback, toutes les x millisecondes
        setInterval(this.updateDate, 1000)
    }

    componentDidUpdate(ancienneProps, ancienState) {
        console.log("Mis à jour", ancienneProps, ancienState);
        if (ancienState.message !== this.state.message) {
            console.log("Le message a changé");
        }
     }

    componentWillUnmount() {
        console.log("Demontage du composant");
    }
    
    render() {
        return(
            // Syntaxe raccourcie pour React.Fragment
            <>
                <p>Date: {this.state.date.toLocaleTimeString()}</p>
            </>
        );
    }
}
export default CycleVie;