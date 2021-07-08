import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Title from '../components/Title';
import CycleVie from '../components/01-cycle-vie/Cycle';
import Params from '../components/04-react-router/Params';
import GoBack from '../components/04-react-router/GoBack';
import NotFound from '../components/04-react-router/NotFound';
import Login from '../components/04-react-router/Login';
import Admin from '../components/04-react-router/Admin';

function Routes(props) {
    return (
        // Switch: S'arrete au premier path qui match
        // exact: pour afficher le composant, il faut que l'url soit strictement egale
        //          par defaut, si / est dans /lifecyle, on affiche les deux.
        <Switch>
            <Route exact path="/" component={Title}/>
            <Route path="/life-cycle" component={CycleVie} />
            <Route path="/params/:titre" component={Params}/>
            <Route path="/back" component={GoBack}/>
            <Route path="/login" component={Login}/>
            <Route path="/admin" component={Admin}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    );
}
export default Routes;