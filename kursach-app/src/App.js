import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
import HeaderApp from './components/header/header';
import FooterApp from './components/footer/footer';
import SchemeApp from './components/main/workspace/scheme';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <HeaderApp/>
      </header>
      <main className="workspace">
        <SchemeApp/>
      </main>
      <footer className="footer">
        <FooterApp/>
      </footer>
    </div>
  );
}

export default App;
