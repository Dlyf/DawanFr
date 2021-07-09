import React from 'react';
import Produit from './Produit';
import './Panier.css';

class Panier extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            produits: [
                {id: 1, title: 'Lorem', quantity: 3, price: 49.63, description: "Magna fugiat mollit qui ex non."},
                {id: 2, title: 'Ipsum', quantity: 1, price: 7.99, description: "Irure mollit officia labore deserunt ullamco mollit et sunt."},
                {id: 3, title: 'Dolor', quantity: 1, price: 3.5, description: "Dolore deserunt minim laborum enim deserunt qui ex nulla ad ex sint fugiat."},
                {id: 4, title: 'Donec', quantity: 7, price: 63.0, description: "Aliqua ea sunt aute Lorem culpa culpa exercitation adipisicing sunt sunt."}
            ]
        }
    }
    
    deleteProduct = (id) => {
        const produits = [...this.state.produits];
        const index = produits.findIndex(produit => produit.id === id);
        if (index > -1) {
            produits.splice(index, 1);
            this.setState({produits: produits});
        }
    }

    editQuantity = (id, newQuantity) => {
        const produits = [...this.state.produits];
        const index = produits.findIndex(produit => produit.id === id);
        const produit = produits[index];
        if (produit.quantity + newQuantity > 1) {
            produit.quantity += newQuantity
        }
        produit.quantity += newQuantity;
        this.setState({
            produits
        });
    }

    createProduct = (product, index) => {
        const productJsx = (
            <Produit
                key={product.id}
                id={product.id}
                title={product.title} 
                quantity={product.quantity} 
                price={product.price}
                index={index}
                editQuantity={this.editQuantity}
                delete={this.deleteProduct}
            />
        )
        return productJsx;
    }

    render() {
        return (
            <div className="container">
                {
                    (this.state.produits.length < 1) ?
                    <p>La liste de produit est vide</p>
                    :
                    <table id="products">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Produit</th>
                                <th scope="col">Quantité</th>
                                <th scope="col">Prix</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.produits.map(this.createProduct)
                            }
                        </tbody>
                    </table>
                }
            </div>
        );
    }
}

export default Panier;