import React from 'react';

export default class SectionFour extends React.Component{
  render(){
    return(
      <section id='contactme'>
        <div className='container'>
          <h1 id='contact-me'>Contact</h1>
          <div id="thankyou_message">
            <h3>Thank you for getting in touch!</h3>
            <p id='body-message'>Your message has been successfully sent. I will look over your message and get back to you as soon as possible. In the mean time you can also contact me through my social media.</p>
            <p id='greeting'><em>Have a great day!</em></p>
          </div>
          <div className="row">
            <form action="https://script.google.com/macros/s/AKfycby_EZZuQtGimErfLyBWdklFfhNe4JAl150Zrx2Veh7um2tealY/exec" method="POST" className='col-lg-6' id='gform'>
              <input type="email" placeholder='Enter Your Email' name='email'/>
              <input type="text" placeholder='Enter A Subject' name='subject'/>
              <textarea name="message" id="TheMessage" cols="30" rows="10" placeholder='Enter Your Message'></textarea>
              <input type="submit" value="Send" className='btn btn-success'/>
            </form>
                <div className="contact-social-media">
                      <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/boyd.jenkins.10" className='social-media col-lg-3 fa fa-facebook'></a>
                      <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/boyd-jenkins-jr-224aa3142/" className='social-media col-lg-3 fa fa-linkedin'></a>
                      <a target='_blank' rel="noopener noreferrer" href="https://github.com/boydjenkins18" className='social-media col-lg-3 fa fa-github github'></a>
                      <a target='_blank' rel="noopener noreferrer" href="https://www.youtube.com/channel/UCkK_O8PYD9S4pUpu-LJZizA" className='social-media col-lg-3 fa fa-youtube'></a>
                </div>
        </div>
        </div>
      </section>
    )
  }
}
