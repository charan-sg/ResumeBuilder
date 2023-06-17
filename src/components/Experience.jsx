import React, { useState } from 'react';

const Experience = () => {
  const [companyName, setCompanyName] = useState('');
  const [designation, setDesignation] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [acheivements, setacheivements] = useState('');
  const [place, setPlace] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      companyName === '' ||
      designation === '' ||
      yearsOfExperience === '' ||
      acheivements === '' ||
      place === '' ||
      employeeId === ''
    ) {
      alert('Please fill in all the required fields.');
      return;
    }

    // Continue with form submission or further processing
  };

  return (
    <div className="container">
    <br></br> <h2 className="text-center" style={{ backgroundColor: 'lightblue' }}>
  <b>EXPERIENCE</b>
</h2>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputCompanyName">COMPANY NAME</label>
            <input
              type="text"
              className="form-control"
              id="inputCompanyName"
              placeholder=""
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputDesignationName">DESIGNATION</label>
            <input
              type="text"
              className="form-control"
              id="inputDesignationName"
              placeholder=""
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputYearsOfExperience">YEARS OF EXPERIENCE</label>
            <select
              id="inputYearsOfExperience"
              className="form-control"
              value={yearsOfExperience}
              onChange={(e) => setYearsOfExperience(e.target.value)}
              required
            >
              <option defaultValue></option>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </div>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputAcheivements">ACHEIVEMENTS</label>
            <input
              type="text"
             className="form-control"
              id="inputAcheivements"
              placeholder=""
              value={acheivements}
              onChange={(e) => setAcheivements(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6 mb-2">
            <label htmlFor="inputPlace">PLACE</label>
            <input
              type="text"
              className="form-control"
              id="inputPlace"
              placeholder=""
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              required
            />
          </div>
          <div className="form-group col-md-6 mb-2">
            <label htmlFor="inputEmployeeId">EMPLOYEE ID</label>
            <input
              type="text"
              maxLength="5"
              className="form-control"
              id="inputEmployeeId"
              placeholder=""
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="text-center">
          
        </div>
      </form>
    </div>
  );
};

export default Experience;
