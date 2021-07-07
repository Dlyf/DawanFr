const aliments = [
	'Riz', 'Eau', 'Haricots', 'Pates', 'Blé', 'Sucre'
]

function createLiElement(contenu, index) {
    return <li key={contenu+index}>{contenu}</li>
}

function Aliments() {
    return (
        <div>
            <h2>Liste des Aliments</h2>
            {
                (aliments.length < 1) ? <p>La liste est vide</p> : <ul>
                    { 
                        aliments.map(createLiElement)
                    }
                </ul>
            }
        </div>
    );
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