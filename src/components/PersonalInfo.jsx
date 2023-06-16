import React, { useState } from 'react';


// Rest of the component code
const PersonalInfo = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form fields before submitting
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      address.trim() === '' ||
      phoneNumber.trim() === '' ||
      state.trim() === '' ||
      city.trim() === '' ||
      zipCode.trim() === '' ||
      gender.trim() === ''
    ) {
      alert('Please fill in all required fields');
      return;
    }
    // Process the form submission
    // ...
  };

  return (
    <div className="container">
      <h2 className="text-center"><b>PERSONAL INFORMATION</b></h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputFirstName">FIRST NAME</label>
            <input
              type="text"
              className="form-control"
              id="inputFirstName"
              placeholder=""
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputLastName">LAST NAME</label>
            <input
              type="text"
              className="form-control"
              id="inputLastName"
              placeholder=""
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">ADDRESS</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder=""
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
  <label htmlFor="inputPhoneNumber">PHONE NUMBER</label>
  <input
    type="text"
    pattern="[0-9]{10}"
    maxLength="10"
    className="form-control"
    id="inputPhoneNumber"
    placeholder=""
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
    required
  />
</div>

        <div className="row">
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputState">STATE</label>
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
            <label htmlFor="inputCity">CITY</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder=""
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
  <div className="form-group col-md-6 mb-3">
    <label htmlFor="inputZipCode">ZIP CODE</label>
    <input
      type="text"
      maxLength="5"
      className="form-control"
      id="inputZipCode"
      placeholder=""
      value={zipCode}
      onChange={(e) => setZipCode(e.target.value)}
      required
    />
  </div>
 <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputGender">GENDER</label>
            <select
              id="inputGender"
              className="form-control"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
            </select>
          </div>
        </div>
        
      </form>
    </div>
  );
};

export default PersonalInfo;
