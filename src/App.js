import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import GettingStarted from './components/GettingStarted';
import Features from './components/Features';
import More from './components/More';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Miss from './components/Miss';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <GettingStarted></GettingStarted>
      <Features></Features>
      <More></More>
      <FAQ></FAQ>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
      <Miss></Miss>
      <Footer></Footer>

    </div>
  );
}

export default App;
