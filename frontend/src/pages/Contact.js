
import { useEffect, useState } from "react";
import { useLawyersContext } from "../hooks/useLawyersContext";
import Join from '../images/join.png';


function Contact() {
    const [name, setName] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [lawFirm, setLawFirm] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [website, setWebsite] = useState('');
    const [languages, setLanguages] = useState('');
    const [demographic, setDemographic] = useState('');
    const [fieldsOfLaw, setFieldsOfLaw] = useState('');
    const [shortBiography, setShortBiography] = useState('');  

    const {lawyers, dispatch} = useLawyersContext()

    const [isLoading, setIsLoading] = useState(true);

    const handleSubmit = async (e) => {
      e.preventDefault()
      const lawyer = {name, pronouns, lawFirm, address, zipCode, website, languages, demographic, fieldsOfLaw, shortBiography}
      const response = await fetch('/api/lawyers', {
              method: 'POST',
              body: JSON.stringify(lawyer),
              headers: {
                      'Content-Type': 'application/json',
              }
      })
      const json = await response.json()
      if (response.ok) {
          dispatch({ type: "CREATE_LAWYER", payload: json });
      } else {
        console.log(json)
      }
      console.log(json)

      dispatch({type: 'CREATE_LAWYER', payload: json})
    }
   
  const labelStyle = {
    marginBottom: '20px',
    width: '70%'
  };

  const inputStyle = {
    width: '70%',
    padding: '8px',
    border: '1px solid gray',
    borderRadius: '8px',
  }

  const inputSelectStyle = {
    padding: '8px',
    border: '1px solid gray',
    borderRadius: '8px',
    width: '80%'

  };

  const textAreaStyle = {
    ...inputSelectStyle, // Spread the inputSelectStyle to include its styles
    height: '200px',
  };

  const formContainerStyle = {
    // gridGap: '20px',
    maxWidth: '1440px',
    backgroundColor: '#F4F1EC',
    justifyContent: 'center',
    display: "flex",
    width: '90%'  
  };

  
  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
  };

  const col = {
    flexDirection: 'column',
    display: 'flex',
    paddingBottom: '20px',
    
  }

  const areYouALawyer = {
    fontSize: '2.4em',
    textAlign: 'center',
    color: '#415441',
    marginBottom: '1.2em'
  };

  return (
    
      <form  onClick={() => handleSubmit} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '40px', marginBottom: '80px'}}>
        <div style={areYouALawyer}><strong>
          Are you a lawyer?<br/>Join My Lingual Lawyer </strong>
        </div>


        <div style={formContainerStyle}>

          <div style={columnStyle}>
            {/* Left column fields */}
            <div style={col}>
              <label style={labelStyle}>
                Name</label>
              <input style={inputStyle} type="text" value={name} onChange={e => setName(e.target.value)} style={inputSelectStyle} />
            </div>

            <div style={col}>
                <label style={labelStyle}>
                Pronouns</label>
                <select value={pronouns} onChange={e => setPronouns(e.target.value)} style={inputSelectStyle}>
                  <option value="she/her">She/Her</option>
                  <option value="he/him">He/Him</option>
                  <option value="they/them">They/Them</option>
                </select>
            </div>
                
            <div style={col}>

              <label style={labelStyle}>
                Law Firm
              </label>
              <input type="text" value={lawFirm} onChange={e => setLawFirm(e.target.value)} style={inputSelectStyle} />
            </div>

            <div style={col}>
              <label style={labelStyle}>
                Address
              </label>
              <input type="text" value={address} onChange={e => setAddress(e.target.value)} style={inputSelectStyle} />
            </div>

            <div style={col}>
              <label style={labelStyle}>
                Zip Code
              </label>
              <input type="text" value={zipCode} onChange={e => setZipCode(e.target.value)} style={inputSelectStyle} />
            </div>

            <div style={col}>
              <label style={labelStyle}>
                Website
              </label>
              <input type="text" value={website} onChange={e => setWebsite(e.target.value)} style={inputSelectStyle} />
            </div>
          </div>

          <div style={columnStyle}>
            {/* Right column fields */}
            <div style={col}>

              <label style={labelStyle}>
              Languages Spoken
              </label>
              <select value={languages} onChange={e => setLanguages(e.target.value)} style={inputSelectStyle}>
                <option value="spanish">Spanish</option>
                <option value="english">English</option>
                <option value="french">French</option>
              </select>
            </div>

            <div style={col}>
              <label style={labelStyle}>
                Demographic
              </label>

              <select value={demographic} onChange={e => setDemographic(e.target.value)} style={inputSelectStyle}>
                <option value="latinx">Latinex</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={col}>
              <label style={labelStyle}>
                Fields of Law
              </label>

              <select value={fieldsOfLaw} onChange={e => setFieldsOfLaw(e.target.value)} style={inputSelectStyle}>
                <option value="immigration">Immigration</option>
                <option value="criminal_justice">Criminal Justice</option>
              </select>
            </div>
            <div style={col}>
              <label style={labelStyle}>
                Short Biography
                </label>

                <textarea value={shortBiography} onChange={e => setShortBiography(e.target.value)} style={textAreaStyle} />
            </div>
          </div>
        </div>
        <button style={{paddingLeft: '3rem', paddingRight: '3rem', marginTop: '2rem'}} type='submit'>Submit</button>
        <div className="hero-container" style={{ position: 'relative', color: 'white', marginTop: '8rem'}}>
                <img src={Join} alt="Hero Image" style={{ width: '100%', height: 'auto', marginTop: '-2%', marginBottom: '-2%' }} />
                <div className="hero-text2" style={{ position: 'absolute', top: '4em', left: '2em', textAlign: 'left', padding: '20px' }}>
                        <h1>
                        Join Our Network: Expand Your Reach <br /> And Help Immigrants In Need!
                        </h1>
                        <p>Sign up as a lawyer below.</p>
                        <button className="langToggle">Join Now</button>
                </div>
          </div>
      </form>
  );
}

export default Contact;
