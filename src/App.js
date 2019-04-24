import React from 'react';

import './App.css';

import { Banner } from './components/Banner';
import { SocialLinks } from './components/SocialLinks';

export const App = () => (
    <div className="app">
        <Banner />
        <SocialLinks />
    </div>
);
