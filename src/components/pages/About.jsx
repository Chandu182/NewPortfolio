/* eslint-disable react/no-unescaped-entities */
import React from 'react' 
import './About.css'; // CSS for styling the timeline 
const About = () => {
  return (
    <div className='AboutContainer'>
      <h1 className='abouttitle'>About Me</h1>
      <h3 className='aboutname'>Hi !, I'm  <b>  Sreekar </b></h3>
      <p className='aboutdescription'> Trainer with extensive experience across various industries and roles. I started my career at <u>I Cube Solutions</u>  <span className='highlight'> (2013-2016) </span> where I honed my skills in software solutions. I later joined Tata Consultancy Services as a consultant for <u>Honeywell</u> <span className='highlight'>(2016-2019)</span>, focusing on Integrated Building Management Systems <span className='highlight'>(IBMS)</span>. Currently, I am working at the <u> Andhra Pradesh State Skill Development Corporation</u> <span className='highlight'>(2020-present)</span>, where I contribute to skill development initiatives. Additionally, I have experience in product-based marketing and software analysis with I Cube software through my role as an I9 Software Analyst.</p>
      {/* Horizontal Timeline for Education */}
      <h1 className='horizontal-timeline-heading'>Education</h1>
      <div className="horizontal-timeline">
        <div className="timeline-item">
          <h3 className='heading'>PG - M Tech CSE</h3>
          <p className='degree'> Tirumala Engineering College</p>
          <p className='college'>2014</p>
        </div>
        <div className="timeline-item">
          <h3 className='heading'>PG - MA Mass Communication and Journalism</h3>
          <p className='degree'>Acharya Nagarjuna University</p>
          <p className='college'>2021-Present</p>
        </div>
      </div>
    </div>
  );
};

export default About;
