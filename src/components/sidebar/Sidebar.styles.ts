import styled from "styled-components";

export const SideNav = styled.div`
    width: 300px;
    height: 100vh;
    background: #24242a;
    box-shadow: 20px 9px 20px 3px rgb(159 159 159 / 10%);
    display: flex;
    flex-direction: column;

    .brand-icon{
        display: flex;
        justify-content: center;
        padding: 12px 0;
        width: 40px;
    }
    
    .menu-list li{
        font-size: 18px;
        margin-bottom: 15px;
    }
`