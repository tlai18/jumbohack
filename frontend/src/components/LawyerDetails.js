import { useState } from "react";
import { useLawyersContext } from "../hooks/useLawyersContext";

const LawyerDetails = ({ lawyer }) => {
    const { dispatch } = useLawyersContext();
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleDeleteClick = async () => {
        const response = await fetch('/api/lawyers/' + lawyer._id, {
            method: "DELETE",
        });
        const json = await response.json();
        if (response.ok) {
            dispatch({ type: "DELETE_LAWYER", payload: json });
        }
    };

    return (
        <div className="lawyer-details">
            <div onClick={openModal} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <img src={lawyer.imageURL} style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover' }}/>

                <div style={{ display: 'flex', flexDirection: 'column', fontSize: '.8em'}}>
                    <h4 style={{ margin: 0, marginBottom: '10px', fontSize: '1.8em'}}>{lawyer.name}</h4>
                    <p style={{ margin: 0 }}><strong>Languages Spoken: </strong>{lawyer.languageSpoken.join(', ')}</p>
                    <p style={{ margin: 0 }}><strong>Fields of Law: </strong>{lawyer.fieldsOfLaw.join(', ')}</p>
                </div>
            </div>

            
            {isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <img src={lawyer.imageURL} style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover', marginBottom: '20px' }} alt="Lawyer" />
                    <p><strong>Name: </strong>{lawyer.name}</p>
                    <p><strong>Pronouns: </strong>{lawyer.pronouns}</p>
                    <p><strong>Law Firm: </strong>{lawyer.lawFirm}</p>
                    <p><strong>Address: </strong>{lawyer.address}</p>
                    <p><strong>Zip Code: </strong>{lawyer.zipCode}</p>
                    <p><strong>Website: </strong>{lawyer.website}</p>
                    <p><strong>Demographic: </strong>{lawyer.demographic}</p>
                    <p><strong>Biography: </strong>{lawyer.shortBiography}</p>
                    <div className="modal-actions">
                        {/* <button onClick={handleDeleteClick}>Delete</button> */}
                        <button style={{color: "white", paddingLeft: "3rem", paddingRight: "3rem"}} className="filterbutton" onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>
            
            )}
        </div>
    );
};

export default LawyerDetails;


