import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Offers from './components/offers/Offers';
import Toucan from './components/toucan/Toucan';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Home />
        <About />
        <Offers />
        <Toucan />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}