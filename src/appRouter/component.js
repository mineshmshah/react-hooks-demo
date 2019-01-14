import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Ex1 from './ex1/index';
import Ex2 from './ex2/index';
import Ex3 from './ex3/index';
import Ex4 from './ex4/index';
import Ex5 from './ex5/index';

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
          component={ () => <Ex1 />}
        />
        <Route
          path='/ex2'
          component={ () => <Ex2 />}
        />
        <Route
          path='/ex3'
          component={ () => <Ex3 />}
        />
        <Route
          path='/ex4'
          component={ () => <Ex4 />}
        />
        <Route
          path='/ex5'
          component={ () => <Ex5 />}
        />
      </Switch>
    </HashRouter>
  </Component>
);

export default Recipes;
