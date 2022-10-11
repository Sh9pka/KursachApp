import logo from './logo.svg';
import './App.css';
import HeaderApp from './components/header/header';
import FooterApp from './components/footer/footer';
import SchemeApp from './components/main/workspace/scheme';
import AppliancesApp from './components/main/workspace/appliances';

function App() {
  return (
    <div className="App">
      <header className="header">
        <HeaderApp/>
      </header>
      <main className="workspace">
        <SchemeApp/>
        <AppliancesApp/>
      </main>
      <footer className="footer">
        <FooterApp/>
      </footer>
    </div>
  );
}

export default App;
