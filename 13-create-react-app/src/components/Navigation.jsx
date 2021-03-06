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
            </NavLink>
            <NavLink to="/life-cycle">
                Cycle de vie
            </NavLink>
            <NavLink to="/params/avatar">
                Params
            </NavLink>
            <NavLink to="/back">
                Retour
            </NavLink>
            <NavLink to="/login">
                Connexion
            </NavLink>
            <NavLink to="/admin">
                Administration
            </NavLink>
            <NavLink to="/react">
                Compteur React
            </NavLink>
            <NavLink to="/redux">
                Compteur Redux
            </NavLink>
            <NavLink to="/hooks">
                Hook
            </NavLink>
            <NavLink to="/forms">
                Formulaire
            </NavLink>
        </nav>
    );
}
export default Navigation;