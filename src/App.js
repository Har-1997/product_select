import React from 'react';

import List  from './features/counter/List';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <List />
      <Footer />
    </div>
  );
}

export default App;
