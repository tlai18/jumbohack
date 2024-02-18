import { createContext, useReducer } from 'react'

export const LawyersContext = createContext()

export const LawyersReducer = (state, action) => {
        switch (action.type) {
                case 'SET_LAWYERS':
                        return {
                                lawyers: action.payload
                        }
                case 'CREATE_LAWYER':
                        return {
                                lawyers: [action.payload, ...state.lawyers]
                        }
                case 'DELETE_LAWYER':
                        return {
                                lawyers: state.lawyers.filter((w) => w._id !== action.payload._id) 
                        }
                default:
                        return state
        }

}

export const LawyersContextProvider = ({ children })=> {
        const [state, dispatch] = useReducer(LawyersReducer, {
                lawyers: null 
        })

        return (
                <LawyersContext.Provider value={{...state, dispatch}}>
                         { children }
                </LawyersContext.Provider>
        )
}
