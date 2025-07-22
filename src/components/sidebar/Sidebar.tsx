import { SideNav } from './Sidebar.styles';
import {  BookText, List, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';


export const Sidebar: React.FC = () => {
    return(
        <SideNav>
            <div className='d-flex justify-content-center align-items-center mb-3 brand-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--sidebar-logo-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volleyball-icon lucide-volleyball"><path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4"/><path d="M12 12a12.6 12.6 0 0 1-8.7 5"/><path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5"/><path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10"/><path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"/><circle cx="12" cy="12" r="10"/></svg>
                <h5 className='mb-0 ms-2 logo-text'>Celavie</h5>
            </div>
            
            <ul className='text-white list-unstyled px-3 menu-list'>
                <li>
                    <NavLink to="/dashboard">
                        <User size={22} className='me-2 icon' />Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users">
                        <User size={22} className='me-2 icon' />Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects">
                        <List size={22} className='me-2 icon' />Projects
                    </NavLink>
                    </li>
                <li>
                <NavLink to="/tasks">
                <BookText size={22} className='me-2 icon' />Todo Task</NavLink>
                </li>
            </ul>
        </SideNav>
    )
};


