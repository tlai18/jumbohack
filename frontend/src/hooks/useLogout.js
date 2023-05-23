import { useAuthContext } from "./useAuthContext";
import { useMealSwipesContext } from "./useMealSwipesContext";

export const useLogout = () => {
        const { dispatch } = useAuthContext()
        const { dispatch: mealswipesDispatch }  = useMealSwipesContext()
        const logout = () => {
                // remove user from storage
                localStorage.removeItem('user')

                // dispatchlogout action
                dispatch({type: 'LOGOUT'})
                mealswipesDispatch({type: 'SET_MEALSWIPES', payload: null})
        }

        return { logout }
}