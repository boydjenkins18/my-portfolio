import React from 'react';

export default class SectionTwoSkills extends React.Component{
  render(){
    return(
      <div>
          <div className="skills">
            <div className='allSkills'>
              <div className='col-xs-12'>
                  <h1>Front End</h1>
                  <div className='col-xs-3 mySkills'>
                      <img className="skillSet" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png" alt="HTML5"/><p>HTML5</p>
                  </div>
                  <div className='col-xs-3 mySkills'>
                      <img className="skillSet" src="https://maxcdn.icons8.com/Share/icon/Logos//css31600.png" alt="CSS3"/><p>CSS3</p>
                  </div>
                  <div className='col-xs-3 mySkills'>
                      <img className="skillSet" src="https://fossbytes.com/wp-content/uploads/2016/05/learn-javascript.png" alt="Javascript"/><p>JavaScript</p>
                  </div>
                  <div className="col-xs-3 mySkills">
                      <img className="skillSet" src="https://camo.githubusercontent.com/a5e7bd9deef127c7ef3f7a1bf2780002c021eab7/68747470733a2f2f692e626c6f67732e65732f3534356366382f6573362d6c6f676f2f6f726967696e616c2e706e67" alt="ES6"/><p>ES6</p>
                  </div>
              </div>
            <br/>
            <div className='col-xs-12'>
              <h1>Frameworks</h1>
                  <div className="col-xs-4 mySkills">
                    <img className="skillSet" src="https://s3.amazonaws.com/media-p.slid.es/uploads/espenhovlandsdal/images/566501/react-logo-colored.png" alt="react"/><p>ReactJS</p>
                  </div>
                  <div className="col-xs-4 mySkills">
                    <img className="skillSet" src="https://wikitechy.com/images/errors/t_category_icon/jqueryjquery-icon.png" alt="jquery"/><p>jQuery</p>
                  </div>
                  <div className="col-xs-4 mySkills">
                      <img className="skillSet" src="http://getbootstrap.com/assets/img/bootstrap-stack.png" alt="Bootstrap"/><p>Bootstrap</p>
                  </div>
            </div>
            <br/>
            <div className='col-xs-12'>
              <h1>Back End</h1>
                  <div className="col-xs-4 mySkills">
                      <img className="skillSet" src="https://openfin.co/wp-content/uploads/2015/05/nodejs_logo.png" alt="node"/><p>NodeJS</p>
                  </div>
                  <div className="col-xs-4 mySkills">
                      <img className="skillSet" src="http://nodejs-cloud.com/img/128px/expressjs.png" alt="expressjs"/><p>ExpressJS</p>
                  </div>
                  <div className="col-xs-4 mySkills">
                      <img className="skillSet" src="http://amartam.com/wp-content/uploads/2016/11/mongodb1.png" alt="mongodb"/><p>MongoDB</p>
                  </div>
              </div>
              <br/>
            <div className='col-xs-12'>
              <h1>Tools</h1>
                <div className='col-xs-3 mySkills'>
                  <img className="skillSet" src="https://maxcdn.icons8.com/Share/icon/color/Logos//npm1600.png" alt="npm"/><p>npm</p>
                </div>
                <div className='col-xs-3 mySkills'>
                  <img className="skillSet" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="git"/><p>git</p>
                </div>
                <div className='col-xs-3 mySkills'>
                  <img className="skillSet" src="https://image.flaticon.com/icons/png/512/23/23957.png" alt="github"/><p>GitHub</p>
                </div>
                <div className="col-xs-3 mySkills">
                  <img className="skillSet" src="https://maxcdn.icons8.com/Color/PNG/512/Logos/heroku-512.png" alt="heroku"/><p>Heroku</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
