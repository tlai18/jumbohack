import { useEffect, useState } from "react";
import { useMealSwipesContext } from "../hooks/useMealSwipesContext";

import MealSwipeDetails from "../components/MealSwipeDetails"
import MealSwipeForm from "../components/MealSwipeForm";
import MealSwipeFilter from "../components/MealSwipeFilter";
const Home = () => {

        const {mealswipes, dispatch} = useMealSwipesContext()
        const [isLoading, setIsLoading] = useState(true);

        const [majorArray, setMajorArray] = useState([]);

        useEffect(() => {
                const fetchMealSwipes = async () => {
                        const response = await fetch('/api/mealswipes')
                        const json = await response.json()
                        if (response.ok) {
                                dispatch({type: 'SET_MEALSWIPES', payload: json})
                        }
                        setIsLoading(false);

                }
                fetchMealSwipes()
                
        }, [dispatch])


        const handleFilterChange = (filters) => {
                setMajorArray(filters);
        };
    
        const getFilteredMealSwipes = () => {
          if (!mealswipes || mealswipes.length === 0) {
            return [];
          }
          
          return mealswipes.filter(mealswipe => {
            const majorMatches = majorArray.length === 0 || 
              majorArray.some(filter => mealswipe.major.toLowerCase() === filter.toLowerCase());
            const isNotComplete = mealswipe.complete === false;
        
            return majorMatches && isNotComplete;
          });
        }
        
        const filteredMealSwipes = getFilteredMealSwipes();
        
        return (
          <div className="home">
            <div className="mealswipes">
              <MealSwipeFilter handleFilterChange={handleFilterChange} />
        
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

export default Home;