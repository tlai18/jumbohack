import { useState } from "react"
import { useMealSwipesContext } from "../hooks/useMealSwipesContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const MealSwipeDetails = ({ mealswipe }) => {
        const { dispatch } = useMealSwipesContext()

        const [isOpen, setIsOpen] = useState(false)
        const openModal = () => setIsOpen(true)
        const closeModal = () => setIsOpen(false)

        const handleDeleteClick = async () => {
               

                const response = await fetch('/api/mealswipes/' + mealswipe._id, {
                        method: "DELETE",
                  
                })
                const json = await response.json()
                if (response.ok) {
                        dispatch({type: "DELETE_MEALSWIPE", payload: json})
                }
        }
        const handleUpdateClick = async () => {
                
                const response = await fetch('/api/mealswipes/' + mealswipe._id, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ complete: true })
                })
            
                const json = await response.json()

                if (response.ok) {
                    dispatch({ type: "UPDATE_MEALSWIPE", payload: json })
                }
        }
            
        return (
                <div className="mealswipe-details">
                        <h4>{mealswipe.name}</h4>
                        <p><strong>Name: </strong>{mealswipe.name}</p>
                        <p><strong>Year: </strong>{mealswipe.year}</p>
                        <p><strong>Major: </strong>{mealswipe.major}</p>
                        <p><strong>Dining Hall: </strong>{mealswipe.location}</p>
                        <p><strong>Meet up Time: </strong>{mealswipe.time}</p>
                        <p><strong>Why me: </strong>{mealswipe.note}</p>
                        <p><strong>Complete: </strong>{mealswipe.complete.toString()}</p>
                        
                        <p>{formatDistanceToNow(new Date(mealswipe.createdAt), {addSuffix: true})}</p>
                        <div className="mealswipe-details-icons">
                                {mealswipe.complete ? null : <span className="material-symbols-outlined" onClick={openModal}>check</span>}
                                <span className="material-symbols-outlined" onClick={() => alert('Not implemented yet bro ski')}>chat</span>
                                <span className="material-symbols-outlined" onClick={handleDeleteClick}>delete</span>
                        </div>

                        {isOpen && (
                                <div className="modal" onClick={closeModal}>
                                        <div className="button-container">
                                                <button className="filter" onClick={handleUpdateClick}>Yes</button>
                                                <button className="filter" onClick={closeModal}>No</button>
                                        </div>
                                </div>
                        )}
                </div>
        )
}

export default MealSwipeDetails