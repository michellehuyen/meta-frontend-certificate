import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
