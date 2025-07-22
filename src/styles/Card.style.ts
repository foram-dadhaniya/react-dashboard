import styled from "styled-components";

export const Card = styled.div`
    position: relative;
    background-color: var(--card-bg);
    font-size: 0.813rem;
    color: var(--text-color);
    border-color: var(--card-border-color);
    background-color: var(--card-bg);
    margin-bottom: 15px;
    .card-header{
        background-color: var(--card-bg) !important;
        border-color: var(--card-border-color);
        .card-title{
            font-size: 18px;
            font-weight: 500;
        }
    }
`