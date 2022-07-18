import React, { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
import getCountInStorage from './StoreTransactions'

//Intial state
let ls = getCountInStorage()
const intialState = {
    transactions: ls
}

//Create context
export const GlobalContext = createContext(intialState)

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, intialState)

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}