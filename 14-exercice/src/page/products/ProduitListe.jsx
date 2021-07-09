import React from 'react';
import ProduitItem from './ProduitItem';
import { fetchProducts } from '../../redux/reducers/productReducer';
import { connect } from 'react-redux';
import { addProduct, editProductQuantity } from '../../redux/actions/actionCreator';

class ProduitListe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {         
        };
    }
    
    componentDidMount() {
        // Voir ce lien pour la gestion de fonction asynchrone
        // https://daveceddia.com/where-fetch-data-redux/
        this.props.dispatch(fetchProducts());
    }


    editQuantite = (id, newQuantity) => {
        const produit = this.props.produits.find(produit => produit.id === id);
        const produitPanier = this.props.produitsPanier.find(pp => produit.id === pp.id);
        console.log("Produit Panier: ", produitPanier);
        if (produitPanier) {
            this.props.dispatch(editProductQuantity(id, newQuantity));
        } else {
            this.props.dispatch(addProduct(produit));
        }
    }
    createJSXProduct = (produit) => {
        return (
            <ProduitItem key={produit.id} {...produit} myEditQuantite={this.editQuantite}/>
        );
    }
    
    render() {
        const { error, loading, produits } = this.props;

        if (error) {
          return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
          return <div>Loading...</div>;
        }

        
        return(
            <div className="container d-flex flex-wrap justify-content-around cards p-3">
                {
                    produits.map(this.createJSXProduct)
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    produits: state.produits,
    produitsPanier: state.produitsPanier,
    loading: state.loading,
    error: state.error
  });
  
export default connect(mapStateToProps)(ProduitListe);