import React from 'react'
import '../Components/About.css';
import Demo from "../Components/Demo.jsx"
import images from "../images/user.png"

export default function About() {
  return (
    <div>
      <div id="about">
        <div className="container" >
          <div className="row">
            <div className="about-col-3">
              <img alt='' src={images} width={400} />
            </div>
            <div className="about-col-1">
              <h1 className="sub-title" style={{ fontSize: 50 }}>About Me</h1>
              <p style={{ fontSize: 17 }}>Hello! My name is Varsha Dadhore, Passionate Skilled, collaborative,
                and attentive Frontend Web Developer.
                My specialties are HTML5 , CSS3, Bootstrap4 , Javascript,ReactJS ,NodeJS and Redux.
                I am a learner and explorer constantly seeking better quality, efficiency,
                and a healthy environment and I enjoy problem-solving and learning from the challenges that
                come along. Thus, the challenges bring the best out of me. I built a number of web Pages
                and I am looking for an environment that will allow me to implement the best of my knowledge.</p>
              <div className="tab-titles">
                <Demo />
              </div>
              {/* <div className="tab-contents active-tab" id="skills"></div>
                    <div className="tab-contents" id="experience"></div>
                    <div className="tab-contents" id="education"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}