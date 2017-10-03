import React from 'react';
import $ from 'jquery';

export default class Navbar extends React.Component{
componentDidMount(){
  var navLinks = document.querySelectorAll('.nav-links')
    for(var i=0;i<navLinks.length;i++){
      navLinks[i].addEventListener('click',function(){
      //eslint-disable-next-line
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      //eslint-disable-next-line
            || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
          }
      }
    });
  }
}
  render(){
    return(
      <nav className='navbar navbar-inverse navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapseLi" aria-expanded="false">
              <span className="sr-only">Toggle Navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#home" className="navbar-brand nav-links">Boyd</a>
          </div>
          <div className='collapse navbar-collapse' id='collapseLi'>
            <ul className='nav navbar-nav'>
              <li><a href="#home" className='nav-links'>Home</a></li>
              <li><a href="#aboutme" className='nav-links'>About</a></li>
              <li><a href="#portfolio" className='nav-links'>Portfolio</a></li>
              <li><a href="#contactme" className='nav-links'>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
