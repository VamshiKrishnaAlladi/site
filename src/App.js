import React from 'react';

import './App.css';

import { Banner } from './components/Banner';
import { SocialLinks } from './components/SocialLinks';
import { MenuButton } from './components/MenuButton';

export const App = () => (
    <div className="app">
        <Banner />
        <SocialLinks />
        <MenuButton className="menu-btn" />
    </div>
);
