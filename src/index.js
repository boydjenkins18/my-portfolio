import React from 'react';
import ReactDOM from 'react-dom';
import ReallySmoothScroll from 'really-smooth-scroll';
import ScrollReveal from 'scrollreveal';
import Navbar from './components/Navbar';
import SectionOne from './components/Section-one';
import SectionTwo from './components/Section-two';
import SectionThree from './components/Section-three';
import SectionFour from './components/Section-four';
import Footer from './components/Footer';

ReallySmoothScroll.shim();

class App extends React.Component{
componentDidMount(){
  let sr=window.sr=ScrollReveal();
    sr.reveal('#content',{
      duration:1000,
      origin:'bottom',
      distance:'25px'
    });
    sr.reveal('#heading-aboutme',{
      duration:2000,
      origin:'bottom',
      distance:"10px",
      viewFactor:0.2
    });
    sr.reveal('#img-boyd',{
      duration:2000,
      origin:'bottom',
      distance:"10px",
      viewFactor:0.2
    });
    sr.reveal('#whoIsBoyd',{
      duration:2000,
      origin:'bottom',
      distance:"10px",
      viewFactor:0.2
    });
    sr.reveal('.allSkills .col-xs-12',{
      duration:2000,
      origin:'bottom',
      distance:"10px",
      viewFactor:0.2
    });
    sr.reveal('#heading-portfolio',{
      duration:2000,
      origin:'bottom',
      distance:"10px",
      viewFactor:0.2
    });
    sr.reveal('.showcaseProj',{
      duration:2000,
      origin:'bottom',
      distance:"50px",
      viewFactor:0.2
    });
    sr.reveal('#contact-me',{
      duration:2000,
      origin:'bottom',
      distance:"15px",
      viewFactor:0.2
    });
    sr.reveal('form',{
      duration:2000,
      origin:'left',
      distance:"150px",
      viewFactor:0.2
    });
    sr.reveal('.contact-social-media',{
      duration:2000,
      origin:'right',
      distance:"150px",
      viewFactor:0.2
    });
  }
  render(){
    return(
      <div id='whole-page'>
        <Navbar />
        
        <SectionOne />
        <hr className='hr-seperation'/>
        <SectionTwo />
        <hr className='hr-seperation'/>
        <SectionThree />
        <hr className='hr-seperation'/>
        <SectionFour />
        <hr className='hr-seperation'/>
        <Footer />
      </div>
    )
  }
}
ReactDOM.render(<App />,document.getElementById('app'))
