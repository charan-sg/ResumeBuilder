import React, { useState } from 'react';
import './SkillManagement.css'; // Import the CSS file for styles

const SkillManagement = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillDelete = (index) => {
    const updatedSkills = [...selectedSkills];
    updatedSkills.splice(index, 1);
    setSelectedSkills(updatedSkills);
  };

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    if (!selectedSkills.includes(selectedOption) && selectedOption !== '') {
      setSelectedSkills((prevSkills) => [...prevSkills, selectedOption]);
    }
    event.target.value = '';
  };

  const handleSkillAdd = () => {
    // Check if all required sections are completed
    if (selectedSkills.length === 0) {
      // Display an error message or perform any desired action
      alert('Please fill in all the required details.');
    } else {
      // Perform desired action on successful form submission
      console.log('Form submitted successfully!');
    }
  };

  return (
    <div>
      <h2>
        <center>
        <h2 className="text-center" style={{ backgroundColor: 'lightblue' }}>
  <b>SKILLS</b>
</h2>

        </center>
      </h2>
      <div>
        <select onChange={handleSelectChange}>
          <option value=""></option>
          <option value="C++">C++</option>
          <option value="C">C</option>
          <option value="C#">C#</option>
          <option value="JAVA">JAVA</option>
          <option value="JAVASCRIPT">JAVASCRIPT</option>
          <option value="PYTHON">PYTHON</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="SQL">SQL</option>
          <option value="SWIFT">SWIFT</option>
          <option value="RUBY">RUBY</option>
          <option value="PERL">PERL</option>
          <option value="DART">DART</option>
          <option value="MATLAB">MATLAB</option>
        </select>
      </div>
      {selectedSkills.map((skill, index) => (
        <span key={index} className="selected-skill">
          {skill}
          <button onClick={() => handleSkillDelete(index)}>&times;</button>
        </span>
      ))}
      <div style={{ textAlign: 'center', backgroundColor:'ButtonHighlight',color:'green'}}>
        <button onClick={handleSkillAdd}>SUBMIT</button>
      </div>
      {selectedSkills.length === 0 && (
        <div style={{ textAlign: 'center',}}>
         </div>
          )}
    </div>
  );
};

export default SkillManagement;
