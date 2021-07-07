function ProduitPanier(props) {
    // const id = props.id;
    // const title = props.title;
    const {id, title, price, quantity} = props;
    return (
       <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{price}</td>
          <td>
            <button> + </button>
            <span>{quantity}</span>
            <button> - </button>
          </td>
          <td>
              
              <button>X</button>
          </td>
       </tr>
    );
}

class Panier extends React.Component {
    state = {
        produitPanier: [
            {id: 1, title: 'Lorem', price: 72.0, quantity: 1},
            {id: 2, title: 'Ipsum', price: 45, quantity: 1},
            {id: 3, title: 'Dolor', price: 32.0, quantity: 1},
        ]
    }

    createProductTable(produit) {
        return <ProduitPanier 
           key={produit.id}
           id={produit.id} 
           title={produit.title} 
           quantity={produit.quantity} 
           price={produit.price}
           />;
     }

    render() {
        return (
            <React.Fragment>
                {
                    (!this.state.produitPanier.length) ? <p>La liste est vide.</p> : 
                    <table border="1">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nom</th>
                            <th>Prix</th>
                            <th>Quantite</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                            { this.state.produitPanier.map(this.createProductTable)}
                    </tbody>
                    </table>
                }
            </React.Fragment>
        );
    }
}

ReactDOM.render(<Panier/>, document.getElementById('root'));