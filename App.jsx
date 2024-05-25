import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import { useRef } from 'react';


const App = () => {

  let myHeadLine =useRef();
const change = () => {

}
  return (
    <div>
    <Header/>
     <HeroSection/>
     <h1 ref={myHeadLine}>The Picture of Efrat A.</h1>
     <button onClick={change}>Click</button>
     <ContactForm/>
     <Footer/>
     
      
    </div>
  );
};

export default App;