import { useMealSwipesContext } from "../hooks/useMealSwipesContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from "../hooks/useAuthContext"

const MealSwipeDetails = ({ mealswipe }) => {
        const { dispatch } = useMealSwipesContext()
        const { user } = useAuthContext()

        const handleClick = async () => {
                if (!user) {
                        return
                }
                const response = await fetch('/api/mealswipes/' + mealswipe._id, {
                        method: "DELETE",
                        headers: {
                                'Authorization': `Bearer ${user.token}`
                        }
                })
                const json = await response.json()
                if (response.ok) {
                        dispatch({type: "DELETE_MEALSWIPE", payload: json})
                }
        }
        return (
                <div className="workout-details">
                        <h4>{mealswipe.name}</h4>
                        <p><strong>Name: </strong>{mealswipe.name}</p>
                        <p><strong>Year: </strong>{mealswipe.year}</p>
                        <p><strong>Major: </strong>{mealswipe.major}</p>
                        <p><strong>Location: </strong>{mealswipe.location}</p>
                        <p><strong>Time: </strong>{mealswipe.time}</p>
                        <p>{formatDistanceToNow(new Date(mealswipe.createdAt), {addSuffix: true})}</p>
                        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
                </div>
        )
}

export default MealSwipeDetails