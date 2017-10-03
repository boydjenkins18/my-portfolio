import React from 'react';
import $ from 'jquery';


export default class SectionThree extends React.Component{
  render(){
    return(
      <section id="portfolio">
        <div className='container'>
          <div className="row">
          <h1 id='heading-portfolio'>Portfolio</h1>
          <hr/>
              <div className="col-sm-6 col-md-4 showcaseProj">
                <div className="thumbnail">
                  <img src={process.env.PUBLIC_URL + '/project-pictures/youtube-clone.jpg'} alt="Youtube Clone" />
                  <div className="caption">
                      <h3>ReactJS Youtube Clone</h3>
                      <span>HTML5 </span>
                      <span>CSS3 </span>
                      <span>JavaScript </span>
                      <span>ReactJS </span>
                      <span>NodeJS </span>
                      <span>BootStrap </span>
                      <span>Youtube API </span>
                      <br/>
                      <a target="_blank" rel="noopener noreferrer" href="https://secure-brook-70816.herokuapp.com/" className="btn btn-default" role="button">View Project</a>
                      <br/>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/boydjenkins18/react-youtube-clone" className="btn btn-default proj-links" role="button"><i className="fa fa-github" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 showcaseProj">
                <div className="thumbnail">
                  <img src={process.env.PUBLIC_URL + '/project-pictures/react-todo.jpg'} alt="React Todo List" />
                  <div className="caption">
                    <h3>ReactJS ToDo List</h3>
                    <span>HTML5 </span>
                    <span>CSS3 </span>
                    <span>JavaScript </span>
                    <span>ReactJS </span>
                    <span>NodeJS </span>
                    <span>BootStrap </span>
                    <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://mysterious-waters-98810.herokuapp.com/" className="btn btn-default" role="button">View Project</a>
                    <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/boydjenkins18/react-todo-list" className="btn btn-default proj-links" role="button"><i className="fa fa-github" aria-hidden="true"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/boydjenkins18/pen/oGXrLO" className="btn btn-default proj-links" role="button"><i className="fa fa-codepen" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 showcaseProj">
                <div className="thumbnail">
                  <img src={process.env.PUBLIC_URL + '/project-pictures/markdown-prev.jpg'} alt="ss" />
                  <div className="caption">
                    <h3>Markdown Previewer</h3>
                    <span>HTML5 </span>
                    <span>CSS3 </span>
                    <span>JavaScript </span>
                    <span>ReactJS </span>
                    <span>NodeJS </span>
                    <span>MarkedJS </span>
                    <span>BootStrap </span>
                    <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://peaceful-gorge-79174.herokuapp.com/" className="btn btn-default" role="button">View Project</a>
                    <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/boydjenkins18/react-markdown-previewer" className="btn btn-default proj-links" role="button"><i className="fa fa-github" aria-hidden="true"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/boydjenkins18/pen/eEqygE" className="btn btn-default proj-links" role="button"><i className="fa fa-codepen" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 showcaseProj">
                <div className="thumbnail">
                  <img src={process.env.PUBLIC_URL + '/project-pictures/twitchtv.jpg'} alt="ss" />
                  <div className="caption">
                    <h3>Twitch TV</h3>
                    <span>HTML5 </span>
                    <span>CSS3 </span>
                    <span>JavaScript </span>
                    <span>jQuery </span>
                    <span>BootStrap </span>
                    <span>Twitch JSON API </span>
                    <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://frozen-atoll-84063.herokuapp.com/" className="btn btn-default" role="button">View Project</a>
                    <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/boydjenkins18/Twitch-TV" className="btn btn-default proj-links" role="button"><i className="fa fa-github" aria-hidden="true"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/boydjenkins18/pen/dzdEeq" className="btn btn-default proj-links" role="button"><i className="fa fa-codepen" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 showcaseProj">
                <div className="thumbnail">
                  <img src={process.env.PUBLIC_URL + '/project-pictures/wikipedia-viewer.jpg'} alt="ss" />
                  <div className="caption">
                    <h3>Wikipedia Viewer</h3>
                    <span>HTML5 </span>
                    <span>CSS3 </span>
                    <span>JavaScript </span>
                    <span>jQuery </span>
                    <span>BootStrap </span>
                    <span>Wikipedia API </span>
                    <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://fast-woodland-49216.herokuapp.com/" className="btn btn-default" role="button">View Project</a>
                    <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/boydjenkins18/Wikipedia-Viewer" className="btn btn-default proj-links" role="button"><i className="fa fa-github" aria-hidden="true"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/boydjenkins18/pen/RZjzpo" className="btn btn-default proj-links" role="button"><i className="fa fa-codepen" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 showcaseProj">
                <div className="thumbnail">
                  <img src={process.env.PUBLIC_URL + '/project-pictures/colorgame.jpg'} alt="ss" />
                  <div className="caption">
                    <h3>Color Game</h3>
                    <span>HTML5 </span>
                    <span>CSS3 </span>
                    <span>JavaScript </span>
                    <span>jQuery </span>
                    <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://ancient-retreat-89297.herokuapp.com/" className="btn btn-default" role="button">View Project</a>
                    <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/boydjenkins18/Color-Game" className="btn btn-default proj-links" role="button"><i className="fa fa-github" aria-hidden="true"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/boydjenkins18/pen/BdyJpR" className="btn btn-default proj-links" role="button"><i className="fa fa-codepen" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 moreProjects collapse">
                <div className="thumbnail">
                  <img src={process.env.PUBLIC_URL + '/project-pictures/req-header-parser.jpg'} alt="ss" />
                  <div className="caption">
                    <h3>NodeJS Request Header Parser</h3>
                    <span>HTML5 </span>
                    <span>CSS3 </span>
                    <span>JavaScript </span>
                    <span>jQuery </span>
                    <span>NodeJS </span>
                    <span>ExpressJS </span>
                    <span>BootStrap </span>
                    <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://enigmatic-shelf-52730.herokuapp.com/" className="btn btn-default" role="button">View Project</a>
                    <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/boydjenkins18/Request-Header-Parser" className="btn btn-default proj-links" role="button"><i className="fa fa-github" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 moreProjects collapse">
                <div className="thumbnail">
                  <img src={process.env.PUBLIC_URL + '/project-pictures/weather-app.jpg'} alt="ss" />
                  <div className="caption">
                    <h3>Current Weather App</h3>
                    <span>HTML5 </span>
                    <span>CSS3 </span>
                    <span>JavaScript </span>
                    <span>jQuery </span>
                    <span>BootStrap </span>
                    <span>OpenWeatherMap API </span>
                    <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://boiling-eyrie-58922.herokuapp.com/" className="btn btn-default" role="button">View Project</a>
                    <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/boydjenkins18/Weather-App" className="btn btn-default proj-links" role="button"><i className="fa fa-github" aria-hidden="true"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/boydjenkins18/pen/VzrvmK" className="btn btn-default proj-links" role="button"><i className="fa fa-codepen" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>

            <div className="col-sm-6 col-md-4 moreProjects collapse">
              <div className="thumbnail">
                <img src={process.env.PUBLIC_URL + '/project-pictures/timestamp.jpg'} alt="ss" />
                <div className="caption">
                  <h3>NodeJS TimeStamp</h3>
                  <span>HTML5 </span>
                  <span>CSS3 </span>
                  <span>JavaScript </span>
                  <span>jQuery </span>
                  <span>NodeJS </span>
                  <span>ExpressJS </span>
                  <span>BootStrap </span>
                  <br/>
                  <a target="_blank" rel="noopener noreferrer" href="https://stormy-mountain-11407.herokuapp.com/home" className="btn btn-default" role="button">View Project</a>
                  <br/>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/boydjenkins18/timestamp" className="btn btn-default proj-links" role="button"><i className="fa fa-github" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 moreProjects collapse">
              <div className="thumbnail">
                <img src={process.env.PUBLIC_URL + '/project-pictures/random-quotes.jpg'} alt="ss" />
                <div className="caption">
                  <h3>Random Quotes Generator</h3>
                  <span>HTML5 </span>
                  <span>CSS3 </span>
                  <span>JavaScript </span>
                  <span>jQuery </span>
                  <span>BootStrap </span>
                  <span>Random Quote JSON API </span>
                  <br/>
                  <a target="_blank" rel="noopener noreferrer" href="https://enigmatic-tundra-71122.herokuapp.com/" className="btn btn-default" role="button">View Project</a>
                  <br/>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/boydjenkins18/Random-Quotes-Generator" className="btn btn-default proj-links" role="button"><i className="fa fa-github" aria-hidden="true"></i></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/boydjenkins18/pen/KvvNaR" className="btn btn-default proj-links" role="button"><i className="fa fa-codepen" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 moreProjects collapse">
              <div className="thumbnail">
                <img src={process.env.PUBLIC_URL + '/project-pictures/todos.jpg'} alt="ss" />
                <div className="caption">
                  <h3>JS ToDo List</h3>
                  <span>HTML5 </span>
                  <span>CSS3 </span>
                  <span>JavaScript </span>
                  <span>jQuery </span>
                  <span>BootStrap </span>
                  <br/>
                  <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/boydjenkins18/full/BdVaLX" className="btn btn-default proj-links" role="button">View Project</a>
                  <br/>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/boydjenkins18/ToDo-List" className="btn btn-default proj-links" role="button"><i className="fa fa-github" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 moreProjects collapse">
              <div className="thumbnail">
                <img src={process.env.PUBLIC_URL + '/project-pictures/current-time.jpg'} alt="ss" />
                <div className="caption">
                  <h3>Current Time Clock</h3>
                  <span>HTML5 </span>
                  <span>CSS3 </span>
                  <span>JavaScript </span>
                  <span>BootStrap </span>
                  <br/>
                  <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/boydjenkins18/full/zdaQmr" className="btn btn-default proj-links" role="button">View Project</a>
                  <br/>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/boydjenkins18/Current-Time-Clock" className="btn btn-default proj-links" role="button"><i className="fa fa-github" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
            </div>
            <hr/>
        </div>

        <div id='view-more'>
            <a onClick={this.onToggleViewMore.bind(this)} role='button' className='btn btn-info btn-xs more' id='view-more-target' data-toggle="collapse" data-target='.moreProjects'>View More</a>
        </div>
      </section>
    )
  }
  onToggleViewMore(){
    let viewTarget = $('#view-more-target');
      viewTarget.toggleClass('more');
      if(viewTarget.hasClass('more')){
        viewTarget.text('View More');
      }else{
        viewTarget.text('View Less');
      }


  };


}
