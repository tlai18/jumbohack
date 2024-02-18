import { LawyersContext } from '../context/LawyersContext'
import { useContext } from 'react'

export const useLawyersContext = () => {
        const context = useContext(LawyersContext)

        if (!context) {
                throw Error("useMealSwipesContext must be used inside an MealSwipesCOntextProvider")
        }
        return context
}