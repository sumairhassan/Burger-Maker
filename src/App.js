import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BergerBuilder/BurgerBuilder';

export default class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder/> 
        </Layout>    
      </div>
    )
  }
}




