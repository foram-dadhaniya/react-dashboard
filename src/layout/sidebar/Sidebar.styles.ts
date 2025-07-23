import styled from "styled-components";

export const SideNav = styled.div`
    width: 300px;
    height: 100vh;
    background-color: var(--sidebar-bg);
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--sidebar-border-color);
    color: var(--sidebar-prime-color);

    .brand-icon{
        padding: 20px 0;
        border-bottom: 1px solid var(--sidebar-border-color);
        .logo-text{
            color: var(--sidebar-prime-color);
        }
    }
    
    .menu-list li{
        font-size: 16px;
        margin-bottom: 15px;
        color: var(--sidebar-prime-color);
    }

`