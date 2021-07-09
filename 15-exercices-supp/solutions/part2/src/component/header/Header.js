import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="header-banner">
                <h1>ReShopAct</h1>
                <div className="header-cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span>0</span>
                </div>
            </div>
        </header>
    );
}
export default Header;