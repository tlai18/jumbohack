import React, { useState } from 'react';
import Hero from '../images/hero-image.png';
import AboutUs from '../images/about-us.png';
import Values from '../images/our-values.png';
import Reviews from '../images/reviews.png';
import Join from '../images/join.png';

const Home = () => {
        
        return (
                <div>
                <header className="hero-section">
                  <img src={Hero} alt="Hero Image" />
                  <div className="hero-text">
                        <h1>
                        Welcome to <br/> My Lingual Lawyer
                        </h1>
        
                        <p>Say goodbye to language barriers and hello to expert legal assistance at your convenience, personalized just for you.</p>    
                                
                </div>
                </header>
          
                <br /><br /><br />
                <div class="home-content">

                
                <div className="language-selector">
                <h1>Select your language</h1>
                <p>Find accessible lawyers fluent in your native language.</p>
                </div>
                <button> BUTTON</button>
                <br />
                <button> FIND LAWYERS BUTTON</button>
                <br /><br /><br /><br />
                <hr></hr>
                <br /><br /><br />
                <img src={AboutUs} alt="About Us Image" />
                <br /><br /><br /><br />
                <hr></hr>
                <br /><br /><br />
                <img src={Values} alt="Values Image" style={{ width: '85%' }}/>
                <br /><br /><br /><br />

                <br /><br /><br />
                <img src={Reviews} alt="Reviews and joining Image"/>
                <div className="hero-section">

                </div>
                <div className="hero-container" style={{ position: 'relative', color: 'white' }}>
                <img src={Join} alt="Hero Image" style={{ width: '100%', height: 'auto', marginTop: '-2%' }} />
                <div className="hero-text2" style={{ position: 'absolute', top: '4em', left: '2em', textAlign: 'left', padding: '20px' }}>
                        <h1>
                        Join Our Network: Expand Your Reach <br /> And Help Immigrants In Need!
                        </h1>
                        <p>Sign up as a lawyer below.</p>
                        <button className="langToggle">Join Now</button>
                </div>
                </div>
          
                </div>
              </div>
        );
              
}

export default Home;