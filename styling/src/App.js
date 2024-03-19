import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Hero from './Hero.';
import Welcome from './Welcome';


function App() {
  // const name ="Hayzed";
 
  return (
    <div className="App">
     <Header />
     <Content/>
     <Welcome/>
     <Hero />
     <Footer />
    </div>
  );
}

export default App;
