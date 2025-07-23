import { ReactNode } from "react";

export interface UserInputValues {
    id: string,
    name: string,
    email: string,
    birthdate: string,
    number: string,
    
}

export interface ProjectInputValues {
    id: string,
    projectName: string,
    startDate: string,
    endDate: string
}

export interface ThemeToggleProps {
    header?: boolean;
}

export interface CardProps {
    header?: string;
    children: ReactNode;
}