import { createContext, useReducer, ReactNode } from "react";

type Theme = 'light' | 'dark';

type Action = {type: "TOGGLE_THEME"};

interface ThemeState {
    theme: Theme;
}


export const ThemeContext = createContext<{
    state: ThemeState;
    dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

const themeReducer = (state: ThemeState, action: Action): ThemeState => {
    switch(action.type){
        case "TOGGLE_THEME" : 
            return{
                theme: state.theme === 'light' ? 'dark' : 'light'
            };
        default:
            return state;
            
    }
}

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(themeReducer, { theme: 'light'});
    return(
        <ThemeContext.Provider value={{state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}
