import { useEffect, useState } from "react";
import Join from '../images/join.png';


const Guidebook = () => {

        useEffect(() => {
                const handleQuestionClick = (event) => {
                    const question = event.target;
                    question.classList.toggle("active");
        
                    const plusMinus = question.querySelector(".plus-minus");
                    plusMinus.innerHTML = (plusMinus.innerHTML === "➕") ? "&#10134;" : "&#x2795;";
        
                    const answer = question.nextElementSibling;
                    answer.style.display = (answer.style.display === "block") ? "none" : "block";
                };
        
                const content = [
                    {
                        q: "I need help understanding legal terms.",
                        a: "For a glossary of specific words, phrases, and terminology used in the Massachusetts Court System, available in 39 different languages, visit https://www.mass.gov/info-details/glossary-of-court-terms#"
                    },
                    {
                        q: "I still can’t find a lawyer that speaks my language.",
                        a: "Translators are available to assist you in navigating the legal system at https://www.mass.gov/orgs/trial-court-office-of-language-access"
                    },
                    {
                        q: "How do I use this site?",
                        a: "Click on the Find a Lawyer tab at the top. Select your preferred languages, distance, and more to find a local Massachusetts lawyer who is best-suited to connect with you."

                    },
                    {
                        q: "I have concerns with the cost of a lawyer, what should I do?",
                        a: "My Lingual lawyer uses lawyers with affordable fees and pro bono (volunteer) services. We also partner with funding organizations to reduce further costs, such as https://mlac.org/funding/immigrantsrightsfund/."

                    }
                ];
        
                const faqList = document.getElementById("faq-list");
                content.forEach((item) => {
                    const listItem = document.createElement("li");
        
                    const question = document.createElement("h4");
                    question.className = "question";
                    question.textContent = item.q;
        
                    const plusMinus = document.createElement("div");
                    plusMinus.className = "plus-minus";
                    plusMinus.innerHTML = "&#x2795;";
                    question.appendChild(plusMinus);
        
                    question.addEventListener("click", handleQuestionClick);
        
                    const answer = document.createElement("p");
                    answer.textContent = item.a;
        
                    listItem.appendChild(question);
                    listItem.appendChild(answer);
                    faqList.appendChild(listItem);
                });
        
                return () => {
                        content.forEach((item) => {
                                const question = document.querySelector(".question");
                                if (question) {
                                    question.removeEventListener("click", handleQuestionClick);
                                }
                            });
                            faqList.innerHTML = '';
                };
            }, []);
        return (
                <div >
                        <div id="faq-backdrop"></div>
                        <strong><h1 style={{display:"flex", justifyContent:"center", color:"#415441", marginTop: "3rem", fontSize: '2.4rem'}}>Resources</h1></strong>
                        <div class="faqs-container">
                                <ul id="faq-list"></ul>
                        </div>
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
                        
                

                </div>
        )
}

export default Guidebook;