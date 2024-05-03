import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Content1 from './Components/Content1/Content1';
import Content2 from './Components/Content2/Content2';
import Areaofpractice from './Components/AeraOfpractice/Areaofpractice';
import Content3 from './Components/Content3/Content3';
import Ourteam from './Components/Ourteam/Ourteam';
import Content4 from './Components/Content4/Content4';
import Content5 from './Components/Content5/Content5';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Content1 />
      <Content2 />
      <Areaofpractice/>
     <Content3 />
     <Ourteam />
     <Content4 />
     <Content5 />
<Footer/>
    </div>
  );
}

export default App;
