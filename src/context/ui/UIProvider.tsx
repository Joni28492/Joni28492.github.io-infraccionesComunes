import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';


export interface UIState {
    theme: boolean;
}


const UI_INITIAL_STATE: UIState = {
    theme: false
}


export const UIProvider: FC = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    return (
        < UIContext.Provider value={{
            // ...state
            prop1: false
        }}>
            {children}
        </ UIContext.Provider>
    )
}