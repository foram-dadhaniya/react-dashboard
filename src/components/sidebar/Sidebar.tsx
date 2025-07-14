import { SideNav } from './Sidebar.styles';
import Logo from '../../assets/logo.png';
import {  BookText, List, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';


export const Sidebar: React.FC = () => {
    return(
        <SideNav>
            <div className='d-flex justify-content-center align-items-center mb-3'>
                <img src={Logo} alt='Logo' className='brand-icon'></img>
                <h5 className='text-white mb-0 ms-2'>Celavie</h5>
            </div>
            
            <ul className='text-white list-unstyled px-3 menu-list'>
                <li>
                    <NavLink to="/users">
                        <User color="white" size={24} className='me-2' />Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects">
                        <List color="white" size={24} className='me-2' />Projects
                    </NavLink>
                    </li>
                <li>
                <NavLink to="/tasks">
                <BookText color="white" size={24} className='me-2' />Todo Task</NavLink>
                </li>
            </ul>
        </SideNav>
    )
};


