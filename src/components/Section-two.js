import React from 'react';
import SectionTwoSkills from './Section-two-skills';

export default class SectionTwo extends React.Component{
  render(){
    return(
      <section id="aboutme">
        <div className='container'>
        <h1 id="heading-aboutme">About Me</h1>
        <div className="row">
        <br/>
          <div className='col-lg-12 center-block'>
            <div className='about-me'>
              <div id='img-boyd'>
                <img id='boydIMG' src={process.env.PUBLIC_URL + '/me.jpg'} alt="BoydImg"/>
              </div>
              <br/>
              <div id='whoIsBoyd' className="row">
                <h2>Who is Boyd?</h2>

                <p className="col-lg-6">
                Boyd was born and raised in the Philippines but he is now living in the United States for 7 years as a US citizen. He is a good friend, easy to talk to, a good listener, a person you can laugh with, a loving son and a tech guy who has a curiosity to anything related to technology, especially in computers. In 2016 he had experienced one of his most downtime in his life but this year he finally found what he wants to do and what he needs to do. He got fascinated with the programming when he first wrote "Hello World" in console log using JavaScript.
                </p>

                <p className="col-lg-6">
                  Boyd discovered his passion that time and he has been learning web development every single day since then. Boyd aspires to become a full stack web developer but he also knows and understands that becoming a developer is not an easy road that is why he is willing to take a risk. Boyd knows that there is a lot to learn and he is just on the tip of the iceberg, although that does not stop him from learning and Boyd is willing to learn and understand what he {"doesn't"} know yesterday and get better every day.
                </p>

              </div>
            </div>
          </div>
            <SectionTwoSkills />
          </div>
        </div>
      </section>
    )
  }
}
