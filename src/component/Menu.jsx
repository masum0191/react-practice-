import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><NavLink className={({isActive})=>isActive?'active':'padding'} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?'active':'padding'} to="/about">About</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?'active':'padding'} to="/products">Products</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;