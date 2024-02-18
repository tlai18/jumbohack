import React, { useState } from 'react';
import { useLawyersContext } from "../hooks/useLawyersContext"

function FindLawyerForm() {
  const [language, setLanguage] = useState('English');
  const [zipcode, setZipcode] = useState('');
  const [proximity, setProximity] = useState('25 miles');
  const [lawIssue, setLawIssue] = useState('Criminal Justice');
  const [lawyerDemographic, setLawyerDemographic] = useState('No preference');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the submission of the form, likely making a request to a server
    console.log({ language, zipcode, proximity, lawIssue, lawyerDemographic });
  };

  

  return (
    <div style={{textAlign: "center", color: "#415441"}} className="find-lawyer-form">
      <h1>Find a Lawyer</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", 
                                             flexDirection:"column", 
                                             gap:"30px",
                                             marginBottom: "10px"}}>
        <label className="filterlabel">
          Select a language
          <select className="filterselect" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
        </label>
        <label className="filterlabel">
          Enter Your Zipcode
          <input  className="filterselect"
            id="zipbox"
            type="text" 
            value={zipcode} 
            onChange={(e) => setZipcode(e.target.value)} 
            placeholder="Zipcode"
          />
        </label>
        <label className="filterlabel">
          Select Proximity
          <select className="filterselect" value={proximity} onChange={(e) => setProximity(e.target.value)}>
            <option value="25 miles">25 miles</option>
          </select>
        </label>
        <label className="filterlabel">
          Law Issue
          <select className="filterselect" value={lawIssue} onChange={(e) => setLawIssue(e.target.value)}>
            <option value="Criminal Justice">Criminal Justice</option>
            <option value="Discrete Law">Criminal Justice</option>
          </select>
        </label>
        <label className="filterlabel">
          Lawyer's Demographic
          <select className="filterselect" value={lawyerDemographic} onChange={(e) => setLawyerDemographic(e.target.value)}>
            <option value="No preference">No preference</option>
          </select>
        </label>
        <button className="filterbutton" type="submit">Find Lawyer</button>
      </form>
    </div>
  );
}

export default FindLawyerForm;
