import React from 'react';
import { connect } from 'react-redux';

function ProduitDetail(props) {
    const produit = props.produit;
    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={produit.image} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body d-flex flex-column justify-content-between align-items-center">
                        <h5 className="card-title">{produit.title}</h5>
                        <p className="card-text">{produit.price}&euro;</p>
                        <p className="card-text"><b>{produit.category}</b></p>
                        <p className="card-text">{produit.description}</p>
                        <p className="card-text">{produit.price}&euro;</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state, componentProps) {
    const id = +componentProps.match.params.id;
    return {
        produit: state.produits.find(p => p.id === id)
    }
}

export default connect(mapStateToProps)(ProduitDetail);