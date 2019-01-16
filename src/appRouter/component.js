import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Ex1 from './ex1/index';
import Ex2 from './ex2/index';
import Ex3 from './ex3/index';
import Ex4 from './ex4/index';
import Ex5 from './ex5/index';
import Ex6 from './ex6/index';

import { Component } from './styles';

// Components

const propTypes = { basename: PropTypes.string };

const Recipes = ({ basename }: propTypes) => (
  <Component>
    <HashRouter {...{basename}}>
      <Switch>
        <Route
          exact
          path='/'
          component={() => (<h1>Hello</h1>)}
        />
        <Route
          path='/ex1'
          exact
          component={ () => <Ex1.main />}
        />
        <Route
          path='/ex1/start'
          component={ () => <Ex1.start />}
        />
        <Route
          path='/ex1/final'
          component={ () => <Ex1.final />}
        />
        <Route
          path='/ex2'
          exact
          component={ () => <Ex2.main />}
        />
        <Route
          path='/ex2/start'
          component={ () => <Ex2.start />}
        />
        <Route
          path='/ex2/final'
          component={ () => <Ex2.final />}
        />
        <Route
          path='/ex3'
          exact
          component={ () => <Ex3.main />}
        />
        <Route
          path='/ex3/start'
          component={ () => <Ex3.start />}
        />
        <Route
          path='/ex3/final'
          component={ () => <Ex3.final />}
        />
        <Route
          path='/ex4'
          exact
          component={ () => <Ex4.main />}
        />
        <Route
          path='/ex4/start'
          component={ () => <Ex4.start />}
        />
        <Route
          path='/ex4/final'
          component={ () => <Ex4.final />}
        />
        <Route
          path='/ex5'
          exact
          component={ () => <Ex5.main />}
        />
        <Route
          path='/ex5/start'
          component={ () => <Ex5.start />}
        />
        <Route
          path='/ex5/final'
          component={ () => <Ex5.final />}
        />
        <Route
          path='/ex6'
          component={ () => <Ex6 />}
        />
      </Switch>
    </HashRouter>
  </Component>
);

export default Recipes;
