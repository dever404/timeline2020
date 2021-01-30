import React from 'react';
import './blog.scss';
import data from '../../data/data.json';

const  links = data.map( (data) =>{
  let n = (data.id % 2 === 0) ? 'left' : 'right';
  return  (
    <div className={ n + ' container-timeline' }>
      <div className='wow fadeInUp'>
        <h2> { data.date } </h2>
        <p> { data.sujet } </p>
      </div> 
    </div>
  )
  }
)

function Blog() {
  return (
    <div className='blog_page'>
      <p className='intro pb-lg-5 wow fadeIn'>شهد المشهد الوطني عدة أحداث على مختلف المستويات، لا سيما مع ظهور وباء فيروس كورونا. وفيما يلي شريط كرونولوجي للأحداث المهمة التي شهدها المغرب منذ بداية العام</p>
      <div className="timeline">
        {links}
      </div>
    </div>
  );
}

export default Blog;
