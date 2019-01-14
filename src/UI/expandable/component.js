import React from 'react';
import Header from './header';
import Footer from './footer';

import enhancer from './enhancer';

import { Component } from './styles';

const Expandable = props => (
  <Component error={props.error}>
    <Header
      {...props}
    />
    { props.open && props.component() }
    <Footer
      {...props}
    />
  </Component>
);

export default enhancer(Expandable);
