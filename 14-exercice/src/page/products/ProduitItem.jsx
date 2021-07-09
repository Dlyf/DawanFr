import React from 'react';
import { Link } from 'react-router-dom';

function ProduitItem(props) {
    return (
        <div className="card flex-shrink-0 m-3 text-center" style={ {width: '18rem'} }>
            <div className="img-container">
                <img src={props.image} className="card-img-top" alt="" />
            </div>
            <div className="card-body d-flex flex-column justify-content-between align-items-center">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.price}&euro;</p>
                <p className="card-text text-start">
                    {/*
                         Si la description fait + de 130 caracteres, on affiche seulement
                         les 130 premiers et '...' sinon on affiche toute la description
                     */}
                    {
                        props.description.length >= 130 ? 
                            props.description.substring(0, 130) + '...' :
                            props.description
                    }
                </p>
                <div>
                    <button onClick={() => props.myEditQuantite(props.id, -1) } className={`btn btn-success ${ props.quantity <= 1 ? 'disabled' : ''}`}> - </button>
                    <span className="btn btn-light">{props.quantity}</span>
                    <button onClick={() => props.myEditQuantite(props.id, 1) } className="btn btn-success"> + </button>
                </div>
                <Link to={`/produit/${props.id}`} className="btn btn-dark">
                    Plus d'information
                </Link>
            </div>
        </div>
    );
}
export default ProduitItem;