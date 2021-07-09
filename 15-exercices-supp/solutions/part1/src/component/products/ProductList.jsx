import React from 'react';
import ProductItem from './ProductItem';

class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            produits: [
                {id: 1, title: 'Lorem', quantity: 3, price: 49.63, description: "Magna fugiat mollit qui ex non."},
                {id: 2, title: 'Ipsum', quantity: 1, price: 7.99, description: "Irure mollit officia labore deserunt ullamco mollit et sunt."},
                {id: 3, title: 'Dolor', quantity: 1, price: 3.5, description: "Dolore deserunt minim laborum enim deserunt qui ex nulla ad ex sint fugiat."},
                {id: 4, title: 'Donec', quantity: 7, price: 63.0, description: "Aliqua ea sunt aute Lorem culpa culpa exercitation adipisicing sunt sunt."}
            ]
        }
    }
    
    createCardJSX = (element) => {
        return <ProductItem key={element.id} id={element.id} title={element.title} price={element.price} description={element.description} quantity={element.quantity}/>;
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="cards">
                    {
                        this.state.produits.map(this.createCardJSX)
                    }
                </div>
            </React.Fragment>
        );
    }
}
export default ProductsList;