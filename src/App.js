import React, { Component } from 'react';
import Header from './Header';
import { Footer } from './Footer';

class App extends Component {
  render() {

    const name = "Bokjo!";
  
    return (
     <div> 
       <Header websiteTitle={name} />
       <Footer />
     </div>
    );
  }
}

export default App;
