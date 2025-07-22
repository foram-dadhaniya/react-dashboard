import styled from "styled-components";

interface PageProps {
    $header?: boolean;
}

export const ToggleInput = styled.div<PageProps>`
    display: flex;
  align-items: center;
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