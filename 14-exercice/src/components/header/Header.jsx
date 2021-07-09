import React from 'react';
import cartFillIcon from 'bootstrap-icons/icons/cart-fill.svg';
import './Header.css';
import {connect} from 'react-redux';

function Header(props) {
    return (
        <header className="navbar navbar-light bg-light">
            <h1>ReShopAct</h1>
            <button type="button" className="btn position-relative p-0">
                <img src={cartFillIcon} alt="show cart"/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {props.articleNumber}
                    <span className="visually-hidden">Nombre d'article dans le panier</span>
                </span>
            </button>
        </header>
    );
}

function mapStateToProps(state) {
    // On creer un nouveaux tableaux avec seulement les quantités pour faciliter le calculs.
    const quantities = state.produitsPanier.map(p=>p.quantity);
    if (!quantities.length) {
        return { articleNumber: 0 }
    }
    // reduce() additionne toutes les valeurs du tableaux.
    // /!\ cette fonction n'a rien a avoir avec Redux, c'est une fonction native de javascript
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    const articleNumber = quantities.reduce(
        (total, currentValue) => total + currentValue
    )
    return { articleNumber }
}
export default connect(mapStateToProps)(Header);