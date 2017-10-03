import React from 'react';
import { init } from 'ityped';

export default class SectionOne extends React.Component{
componentDidMount(){
    init('.ityped',{
      strings:["Hello World","My name is Boyd Jenkins","I'm a Web Developer","I'm a good friend","a loving son","and","I love cats"],
      typeSpeed: 125,
      backSpeed:70,
      backDelay:500,
      loop:true,
      onFinished:function(){}
    });
  }
  render(){
    return(
        <section id="home">
          <div className="container">
            <div className='row'>
              <div className='col-lg-12 myheading'>
                <div id='content'>
                    <span className='ityped'></span>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  }
}
