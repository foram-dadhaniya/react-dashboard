import { useContext } from "react";
import { ThemeContext } from "../../contenxt/ThemeContext";
import { HiddenToggleInput, ToggleInput } from "./ThemeToggle.styles";
import {ThemeToggleProps} from "../../types/types";
import {  Sun, Moon } from 'lucide-react';

export const ThemeToggle:React.FC<ThemeToggleProps> = ({ header }) => {
    
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("ThemeToggle must be used within a ThemeProvider");
    }
    const { state, dispatch } = context;
    return(
        <ToggleInput className="form-check form-switch theme-toggle" $header={header}>
            <HiddenToggleInput className="form-check-input" type="checkbox" id="themeToggleSwitch" onClick={() => dispatch({ type: 'TOGGLE_THEME'})} />
            <label className="form-check-label" htmlFor="themeToggleSwitch">{state.theme === "dark" ? <Moon size={24} className="icon" /> : <Sun size={24} className="icon" /> }</label>
        </ToggleInput>
    );
};