import React from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';


const ResumeBuilder= () => {
  return (
    <div className="container">
      <h1>RESUME</h1>
      <PersonalInfo />
      <Education />
      <Experience />
      <Skills/>
    </div>
  );
};

export default ResumeBuilder;