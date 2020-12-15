import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home, MenuButton, UnderConstruction, PageNotFound, SocialLinks, Contact, About, Blog, Projects, Resume } from './components';

import './App.css';

export const App = () => (
    <div className="app">
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
                <Route path="/resume" component={Resume} />
                <Route path={[]} component={UnderConstruction} />
                <Route component={PageNotFound} />
            </Switch>
            <SocialLinks className="social"/>
            <MenuButton className="menu-btn" />
        </Router>
    </div>
);
