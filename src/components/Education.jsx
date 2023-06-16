import React, { useState } from 'react';

const Education = () => {
  const [showFields, setShowFields] = useState(false);
  const [highestDegree, setHighestDegree] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const [passedOutYear, setPassedOutYear] = useState('');
  const [branch, setBranch] = useState('');
  const [state, setState] = useState('');
  const [cgpa, setCGPA] = useState('');

  const handleButtonClick = () => {
    setShowFields(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form fields before submitting
    if (
      highestDegree.trim() === '' ||
      instituteName.trim() === '' ||
      passedOutYear.trim() === '' ||
      branch.trim() === '' ||
      state.trim() === '' ||
      cgpa.trim() === ''
    ) {
      alert('Please fill in all required fields');
      return;
    }
    // Process the form submission
    // ...
  };

  return (
    <div className="container">
      <h2 className="text-center" style={{ backgroundColor: 'lightblue' }}>
  <b>EDUCATION</b>
</h2>

      <form className="needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputHighestDegree">HIGHEST DEGREE</label>
            <input
              type="text"
              className="form-control"
              id="inputDegree"
              placeholder=""
              value={highestDegree}
              onChange={(e) => setHighestDegree(e.target.value)}
              required
            />
          </div>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputInstituteName">INSTITUTE / UNIVERSITY NAME</label>
            <input
              type="text"
              className="form-control"
              id="inputInstitute"
              placeholder=""
              value={instituteName}
              onChange={(e) => setInstituteName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputPassedoutYear">PASSED OUT YEAR</label>
            <select
              id="inputPassedoutYear"
              className="form-control"
              value={passedOutYear}
              onChange={(e) => setPassedOutYear(e.target.value)}
              required
            >
              <option value=""></option>
              <option>2022</option>
              <option>2021</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
            </select>
          </div>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputBranch">BRANCH</label>
            <input
              type="text"
              min="0"
              className="form-control"
              id="inputDesignationName"
              placeholder=""
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputFirstName">STATE</label>
            <select
              id="inputState"
              className="form-control"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            >
              <option value=""></option>
              <option>ANDRA PRADESH</option>
              <option>ARUNACHAL PRADESH</option>
              <option>ASSAM</option>
              <option>Bihar</option>
              <option>CHATTISGARH</option>
              <option>DELHI</option>
              <option>GOA</option>
              <option>GUJARAT</option>
              <option>Harayana</option>
              <option>HIMACHAL PRADESH</option>
              <option>JHARKHAND</option>
              <option>JAMMU KASHMIR</option>
              <option>KARNATAKA</option>
              <option>KERALA</option>
              <option>MADYA PRADESH</option>
              <option>MAHARASTRA</option>
              <option>MANIPUR</option>
              <option>MEGHALAYA</option>
              <option>MIZORAM</option>
              <option>NAGALAND</option>
              <option>ODISHA</option>
              <option>PUNJAB</option>
              <option>RAJASTHAN</option>
              <option>SIKKIM</option>
              <option>TAMIL NADU</option>
              <option>TELANGANA</option>
              <option>TRIPURA</option>
              <option>UTTAR PRADESH</option>
              <option>UTTARAKHAND</option>
              <option>WEST BENGAL</option>
            </select>
          </div>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputCGPA">CGPA/PERCENTAGE</label>
            <input
              type="number"
              min="0"
              className="form-control"
              id="inputDesignationName"
              placeholder=""
              value={cgpa}
              onChange={(e) => setCGPA(e.target.value)}
              required
            />
          </div>
        </div>

        {showFields && (
          <div>
            <div className="row">
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="inputHighestDegree">12TH/DIPLOMA</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputDegree"
                  placeholder=""
                  required
                />
              </div>
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="inputInstituteName">INSTITUTE / UNIVERSITY NAME</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputInstitute"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="inputPassedoutYear">PASSED OUT YEAR</label>
                <select
                  id="inputPassedoutYear"
                  className="form-control"
                  required
                >
                  <option defaultValue></option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                </select>
              </div>
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="inputCGPA">CGPA/PERCENTAGE</label>
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  id="inputCGPA"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
        
          <button type="button" className="btn btn-secondary" onClick={handleButtonClick}>
            ADD EDUCATION
          </button><br></br>
        </div>
        
      </form>
    </div>
  );
};

export default Education;
