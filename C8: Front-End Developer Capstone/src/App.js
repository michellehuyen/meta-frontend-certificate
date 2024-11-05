import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './bootstrap-custom.scss';
import 'bootstrap/scss/bootstrap.scss';
import './App.css';

import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
