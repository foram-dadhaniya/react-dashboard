import { useContext } from "react";
import { ThemeContext } from "../../contenxt/ThemeContext";

export const ThemeToggle:React.FC = () => {
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("ThemeToggle must be used within a ThemeProvider");
    }
    const { state, dispatch } = context;
    return(
        <button type="button" onClick={() => dispatch({ type: 'TOGGLE_THEME'})} >{state.theme}</button>
    );
};