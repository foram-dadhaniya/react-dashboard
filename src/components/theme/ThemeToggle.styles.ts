import styled from "styled-components";

interface PageProps {
    $header?: boolean;
}

export const ToggleInput = styled.div<PageProps>`
    display: flex;
  align-items: center;
  position: fixed;
    z-index: 1000;
    border-radius: 20px;
    color: var(--text-color);
    border: none;
    cursor: pointer;
    border-color: var(--border-color);
    top: 15px;
    right: 15px;
  cursor: pointer;
     ${(props) =>
    props.$header &&
    `
      position: relative;
      top: 0;
    `}
`;

export const HiddenToggleInput = styled.input`
  display: none;
`;