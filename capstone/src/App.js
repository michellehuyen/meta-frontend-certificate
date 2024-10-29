import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';

function App() {
  return (
    // <div className="App">
    //   Homepage
    // </div>
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
