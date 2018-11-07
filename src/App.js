import React, { Component } from 'react';
import Header from './Header';
import { Footer } from './Footer';
import { List } from './List';
import { SmartCom } from './SmartCom'

class App extends Component {
  
  render() {

    const name = "Bokjo!";
    let iminja = ['Janko', 'Trajko', 'Torko']
  
    return (
     <div> 
       <Header websiteTitle={name} />
       <hr />
       <List names={iminja} />
       <hr />
       <SmartCom />
       <hr />
       <Footer names={iminja} />
     </div>
    );
  }
}

export default App;
