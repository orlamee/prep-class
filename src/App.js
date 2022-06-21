import './App.css';
import Header from './Header';
import Hero from './Hero';
import Patron from './Patron';
import About from './About';
import Works from './Works';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Patron/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
