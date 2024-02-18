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
                        <br/>Welcome to <br/> My Lingual Lawyer
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
                <div className="hero-container" style={{ position: 'relative', color: 'white' }}>
                <img src={AboutUs} alt="Hero Image" style={{ width: '85%', height: 'auto'}} />
                <div className="hero-text2" style={{ width: '50%', position: 'absolute', top: '1px', left: '35em', textAlign: 'left', padding: '5px' }}>
                        <h1  style={{ color: '#415441', fontSize: '50px' }}>
                        About Us <br /> 
                        </h1>
                        <p style={{
                        lineHeight: '2',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                        }}>
                                <br/>
                        Are you an immigrant navigating the complex legal landscape in a new country?
                        <br/>
                        We understand the challenges you face, and that's why we're here to make the process easier for you.
                        My Lingual Lawyer is a unique platform designed to connect immigrants with lawyers who speak their language and have a similar background demographic, fostering a deeper understanding of your unique needs.
                        </p>
                </div>
                </div>
                <br /><br /><br />
                <hr></hr>
                <br />
                <div className="hero-container" style={{ position: 'relative', color: 'white', alignItems: 'center' }}>
                <h1  style={{ color: '#415441', fontSize: '60px' }}>
                        Our Values <br /> 
                        </h1>
                <img src={Values} alt="Hero Image" style={{ width: '85%', height: 'auto'}} />
                <div className="hero-text2" style={{ fontSize: '40px', fontWeight: '600', display: 'flex', width: '80%', justifyContent: 'space-around', alignItems: 'center', alignContent: 'center', position: 'absolute', top: '115px', textAlign: 'left', padding: '100px' }}>                  
                        <p style={{
                        lineHeight: '2',
                        paddingLeft: '35px',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                        }}>
                                Accessibility
                        </p>
                        <p style={{
                        lineHeight: '2',
                        paddingLeft: '30px',
                        paddingRight: '80px',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                        }}>
                                Empowerment
                        </p>
                        <p style={{
                        lineHeight: '2',
                        paddingLeft: '1px',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                        }}>
                                Justice
                        </p>
                </div>
                </div>

                <br /><br /><br />
                <div className="hero-section">

                <div className="hero-container" style={{ position: 'relative', color: 'white', textAlign: 'center' }}>
                <img src={Reviews} alt="Hero Image" style={{ width: '100%', height: 'auto'}} />
                <div className="hero-text2" style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center', alignItems: 'center', alignContent: 'center', position: 'absolute', top: '10px', padding: '20px' }}>                  
                <h1  style={{ fontSize: '60px' }}>
                        Reviews <br /> 
                        </h1>
                        
                        <div style={{ display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '13px', marginTop: '280px', marginRight: '50px', marginLeft: '50px'}}>
                        <p style={{
                        lineHeight: '2',
                        paddingLeft: '40px',
                        flex: '1',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                        }}>
                                "I used this service to find a lawyer who speaks Spanish fluently. The lawyer I was matched with was professional and knowledgeable, and I appreciated the convenience of being able to connect with someone nearby!"
                        </p>
                        <p style={{
                        lineHeight: '2',
                        paddingLeft: '40px',
                        // paddingRight: '80px',
                        flex: '1',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                        }}>
                                “I cannot thank this lawyer-immigrants matching service enough for connecting me with a lawyer who not only spoke my native language but also understood the cultural nuances of my background.”
                        </p>
                        <p style={{
                        lineHeight: '2',
                        paddingLeft: '5px',
                        paddingRight: '40px',
                        flex: '1',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                        }}>
                                "Found a Mandarin-speaking lawyer nearby. Seamless <br/> process, highly recommend!"
                        </p>
                        </div>
                </div>
                </div>


                </div>
                <div className="hero-container" style={{ position: 'relative', color: 'white' }}>
                <img src={Join} alt="Hero Image" style={{ width: '100%', height: 'auto', marginTop: '-2%', marginBottom: '-2%' }} />
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