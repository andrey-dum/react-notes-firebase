import { FETCH_NOTES, ADD_NOTE, SHOW_LOADER, REMOVE_NOTE } from "../types";

const handlers = {
    [SHOW_LOADER]: (state) => ({...state, loading: true}),
    [ADD_NOTE]: (state, {payload}) => ({
        ...state, 
        notes: [...state.notes, payload]
    }),
    [FETCH_NOTES]: (state, {payload}) => ({
        ...state, 
        notes: payload
    }),
    [REMOVE_NOTE]: (state, {payload}) => ({
        ...state, 
        notes: state.notes.filter(note => note.id !== payload)
    }),
    DEFAULT: state => state,
    
}

export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}