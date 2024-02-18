import { useEffect, useState } from "react";
import { useLawyersContext } from "../hooks/useLawyersContext";

import LawyerDetails from "../components/LawyerDetails"
const Lawyers = () => {

        const {lawyers, dispatch} = useLawyersContext()
        const [isLoading, setIsLoading] = useState(true);
        const [language, setLanguage] = useState('Any');
        const [zipcode, setZipcode] = useState('');
        const [proximity, setProximity] = useState('25 miles');
        const [lawIssue, setLawIssue] = useState('Criminal Justice');
        const [lawyerDemographic, setLawyerDemographic] = useState('No preference');

        useEffect(() => {
                const fetchLawyers = async () => {
                  const langQuery = `lang=${encodeURIComponent(language)}`;
                  const response = await fetch(`/api/lawyers?${langQuery}`, {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });
                  const json = await response.json();
                  if (response.ok) {
                    dispatch({ type: "SET_LAWYERS", payload: json });
                  }
                  setIsLoading(false);
                };
            
                fetchLawyers();
        }, [dispatch, language]); // Depend on language state to refetch when it changes
        return (
                <div className="home" id="page-content">
                        <div className="mealswipes">
                                {isLoading ? (<p></p>) : lawyers && lawyers.length > 0 ? 
                                        (lawyers.map((lawyer) => (
                                        <LawyerDetails key={lawyer._id} lawyer={lawyer} />
                                        ))
                                        ) : (
                                        <p>No meal swipe entries found.</p>
                                )}
                        </div>
                        <div style={{textAlign: "center", color: "#415441"}} className="find-lawyer-form">
      <h1>Find a Lawyer</h1>
      <form style={{ display: "flex", 
                                             flexDirection:"column", 
                                             gap:"30px",
                                             marginBottom: "10px"}}>
        <label className="filterlabel">
          Select a language
          <select className="filterselect" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="Any">Any</option>
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
            <option value="Manslaughter">Manslaughter</option>
            <option value="Immigration">Immigration Law</option>
            <option value="Discrete Law">Discrete Law</option>

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
                </div>
        )
}

export default Lawyers;