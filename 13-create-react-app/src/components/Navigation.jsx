import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
    return (
        <nav>
            {/*
                Par defaut, les urls qui correspondent, auront la classe 'active'
                on peut redefinir la classe a ajouter avec 
                activeClassName="current"
            */}
            <NavLink exact to="/">
                Accueil
            </NavLink> | 
            <NavLink exact to="/life-cycle">
                Cycle de vie
            </NavLink>
        </nav>
    );
}
export default Navigation;