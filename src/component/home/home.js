import React from 'react';
import gsap from "gsap";
import './home.scss';

export default class Home extends React.Component {

  componentDidMount() {
    document.body.addEventListener("mousemove",function(evt) {
      var mouseX = evt.clientX,
          mouseY = evt.clientY;
      
      gsap.set(".cursor", {
        x: mouseX,
        y: mouseY
      })
      
      gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1
      })
    })
  }

  render() {
    return (
      <div className='home_body'>
        <span className='cursor'></span>
        <div className='shapes'>
          <span className="shape shape-1"></span>
          <span className="shape shape-2"></span>
          <span className="shape shape-3"></span>
        </div>
        <div className='content'>
          <div>
            <h1>Happy New Year 2021 </h1>
            <h3 className='text-center mt-4'>شريط كرونولوجي لأهم الأحداث الوطنية لسنة 2020</h3>
          </div>
        </div> 
      </div>
    );
  }
}
