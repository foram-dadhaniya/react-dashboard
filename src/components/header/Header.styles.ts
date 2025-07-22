import styled from "styled-components";

export const HeaderTop = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    height: 65px;
    padding: 15px;
    background-color: var(--sidebar-bg);
    border-bottom: 1px solid var(--sidebar-border-color);
    .serachInput{
        border: 1px solid var(--border-color);
        border-radius: 5px;
        background-color: transparent;
        height: 35px;
        padding: 10px;
        color: white;
        font-size: 14px;
    }

    .search-profile{
        margin-right: 100px;
    }
`