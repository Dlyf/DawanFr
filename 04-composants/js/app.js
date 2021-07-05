/**
 * <Header/>
 * <Navigation>
 *      <ul></ul>
 * </Navigation>
 * <Product/>
 */

/**
 * 2 types de composants
 *      - Les fonctions composants (n'ont pas d'état)
 *      - Les classes composants (ont un état local)
 */

// une fonction composant renvoie du JSX.
function Product() {
    return <p>Produit</p>
}

// Les props sont utilisée pour recuperer les attribut sur la balises.
// Le parametre props est un objet qui contient toutes les valeurs
function ProductName(props) {
    console.log(props.nom);
    // Pour inserer des valeurs dans du JSX on utilise les accolades simples.
    return <p>Produit: { props.nom }</p>
}

// Une classe composant. En javascript le mot clef extends permet l'héritage
class App extends React.Component {
    // constructor() {

    // }
    render() {
        // on peut faire le traitement que l'on veut
        return (
            <div>
                <Product/>
                <ProductName nom="banane" />
                <ProductName nom="pomme" />
            </div>
        );
    }
}

// ReactDOM.render(Product(), document.getElementById('root'));
// ReactDOM.render(ProductName({nom: 'pomme', message=''}), document.getElementById('root'));

ReactDOM.render(<App/>, document.getElementById('root'));
 