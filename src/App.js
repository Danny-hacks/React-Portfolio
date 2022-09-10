import React, {useEffect} from 'react'
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Aos from 'aos';
import "aos/dist/aos.css";


const App = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  }, []);
  return ( <>
    <div data-aos="fade-up"><Header/></div>
    <Nav/>
    <div data-aos="fade-up"><About/></div>
    <div data-aos="fade-up"><Experience/></div>
    <div data-aos="fade-up"><Services/></div>
    <div data-aos="fade-up"><Portfolio/></div>
    <div data-aos="fade-up"><Contact/></div>
    <div data-aos="fade-up"><Footer/></div>
</>
  )
}

export default App