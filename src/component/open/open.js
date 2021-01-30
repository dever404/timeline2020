import React from 'react';
import data from '../../data/data_d.json';

const  links = data.map( (data) =>{
  let n = (data.id % 2 === 0) ? 'left' : 'right';
  return  (
    <div className={ n + ' container-timeline' }>
      <div className='wow fadeInUp'>
        <h6 className='font-weight-bold'> { data.date } </h6>
        <p> { data.sujet } </p>
      </div> 
    </div>
  )
  }
)

function Open() {
  return (
    <div className='blog_page'>
      <p className='intro pb-lg-5 wow fadeIn'>غادرتنا إلى رحاب الله وجواره عدة شخصيات مغربية خلال سنة 2020 التي كانت سنة استثنائية تميزت على الخصوص بتفشي جائحة فيروس كورونا المستجد وتداعياتها في جميع المجالات</p>
      <div className="timeline">
        {links}
      </div>
    </div>
  );
}

export default Open;
