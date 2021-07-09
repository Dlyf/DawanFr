import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProduitListe from '../page/products/ProduitListe';
import ProduitDetail from '../page/product/ProduitDetail';

function Routes(props) {
    return (
        <Switch>
            <Route exact path="/" component={ProduitListe}/>
            <Route exact path="/produit/:id" component={ProduitDetail}/>
        </Switch>
    );
}
export default Routes;