import React from 'react';
import gsap from "gsap";
import './home.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

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
        <span class='cursor'></span>
        <div class='shapes'>
          <span class="shape shape-1"></span>
          <span class="shape shape-2"></span>
          <span class="shape shape-3"></span>
        </div>
        <div class='content'>
          <div>
            <h1>Happy New Year 2021 </h1>
            <h3 className='text-center mt-4'>شريط كرونولوجي لأهم الأحداث الوطنية لسنة 2020</h3>
          </div>
        </div> 
      </div>
    );
  }
}
