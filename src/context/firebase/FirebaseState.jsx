import React, {useReducer} from 'react'
import axios from 'axios';
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';



const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    return (
        <FirebaseContext.Provider value={{

        }}>
            {children}
        </FirebaseContext.Provider>
    )
}