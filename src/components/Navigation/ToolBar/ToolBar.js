import React from 'react';
import './ToolBar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';


const toolbar = (props) => (
    <header className="Toolbar">
        <div>Menu</div>
        <div className="Logo">
        <Logo height="80%"/>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);


export default toolbar;