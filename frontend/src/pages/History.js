import { useEffect, useState } from "react";
import { useMealSwipesContext } from "../hooks/useMealSwipesContext";
import { useAuthContext } from "../hooks/useAuthContext";

import MealSwipeDetails from "../components/MealSwipeDetails"
import MealSwipeForm from "../components/MealSwipeForm";
const History = () => {


        const {mealswipes, dispatch} = useMealSwipesContext()
        // const [workouts, setWorkouts] = useState(null)
        const [isLoading, setIsLoading] = useState(true);
        const {user} = useAuthContext()

        useEffect(() => {
                const fetchMealSwipes = async () => {
                        const response = await fetch('/api/mealswipes', {
                                headers: {
                                        'Authorization': `Bearer ${user.token}`
                                }
                        })
                        const json = await response.json()
                        if (response.ok) {
                                dispatch({type: 'SET_MEALSWIPES', payload: json})
                                // setWorkouts(json)
                        }
                        setIsLoading(false);

                }
                if (user) {
                        fetchMealSwipes()
                }
        }, [dispatch, user])
        const getFilteredMealSwipes = () => {
                if (!mealswipes || mealswipes.length === 0) {
                        return [];
                }
                
                return mealswipes.filter(mealswipe => {
                        const isComplete = mealswipe.complete === true;
                        return isComplete;
                });
        }
              
        const filteredMealSwipes = getFilteredMealSwipes();
              
        return (
        <div className="home">
                <div className="mealswipes">        
                {isLoading ? (
                <p>Loading...</p>
                ) : (
                filteredMealSwipes.length > 0 ? (
                filteredMealSwipes.map(mealswipe => 
                        <MealSwipeDetails key={mealswipe._id} mealswipe={mealswipe} />
                )
                ) : (
                <p>No meal swipe Requests found.</p>
                )
                )}
                </div>
                <MealSwipeForm />
        </div>
        );
}

export default History;