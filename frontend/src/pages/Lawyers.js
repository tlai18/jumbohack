import { useEffect, useState } from "react";
import { useLawyersContext } from "../hooks/useLawyersContext";

import LawyerDetails from "../components/LawyerDetails"
import LawyerFilter from "../components/LawyerFilter";
const Lawyers = () => {

        const {lawyers, dispatch} = useLawyersContext()
        // const [workouts, setWorkouts] = useState(null)
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
                const fetchLawyers = async () => {
                        const response = await fetch('/api/lawyers', {
                              
                        })
                        const json = await response.json()
                        if (response.ok) {
                                dispatch({type: 'SET_LAWYERS', payload: json})
                                // setWorkouts(json)
                        }
                        setIsLoading(false);

                }
                        fetchLawyers()
        }, [dispatch])
        return (
                <div className="home">
                        <div className="mealswipes">
                                {isLoading ? (<p></p>) : lawyers && lawyers.length > 0 ? 
                                        (lawyers.map((lawyer) => (
                                        <LawyerDetails key={lawyer._id} lawyer={lawyer} />
                                        ))
                                        ) : (
                                        <p>No meal swipe entries found.</p>
                                )}
                        </div>
                        <LawyerFilter />
                </div>
        )
}

export default Lawyers;