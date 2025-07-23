import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  background-color: var(--card-bg);
  font-size: 0.813rem;
  color: var(--text-color);
  border: 1px solid var(--card-border-color);
  margin-bottom: 15px;
`;

export const CardHeader = styled.div`
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--card-border-color);
  padding: 0.75rem 1rem;
  font-size: 16px;
  font-weight: 500;
`;

export const CardTitle = styled.h5`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;

export const CardBody = styled.div`
  padding: 1rem;
`;