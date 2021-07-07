class Aliments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aliments: [
                'Riz', 'Eau', 'Haricots', 'Pates', 'Blé', 'Sucre'
            ]
        }
    }

    createLiElement(contenu, index) {
        return <li key={contenu+index}>{contenu}</li>
    }

    // state = {}
    render() {
        return (
            <div>
                <h2>Liste des Aliments</h2>
                {
                    (this.state.aliments.length < 1) ? <p>La liste est vide</p> : <ul>
                        { 
                            this.state.aliments.map(this.createLiElement)
                        }
                    </ul>
                }
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Aliments/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));