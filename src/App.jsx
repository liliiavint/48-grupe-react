// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Hero />
      <div className="App">CONTENT1</div>
      <div className="App">CONTENT2</div>
      <div className="App">CONTENT3</div>
      <Footer/>
      
    </div>
  )
}

export default App;
