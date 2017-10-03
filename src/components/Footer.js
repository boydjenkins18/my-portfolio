import React from 'react';
import $ from 'jquery';

export default class Footer extends React.Component{
componentDidMount(){
  var footerLinks = document.querySelectorAll('.footerLinks')
    for(var i=0;i<footerLinks.length;i++){
        footerLinks[i].addEventListener('click',function(){
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
      <div className="navbar navbar-inverse navbar-static-bottom" id='footer'>
        <a href="#home" className='footerLinks'>Home</a>
        <a href="#aboutme" className='footerLinks'>About</a>
        <a href="#portfolio" className='footerLinks'>Portfolio</a>
        <a href="#contactme" className='footerLinks'>Contact</a>
        <h5>&copy; Copyright 2017 Boyd Jenkins</h5>
      </div>
    )
  }
}
