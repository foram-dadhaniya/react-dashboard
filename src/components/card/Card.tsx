import { CardProps } from "../../types/types";
import { CardWrapper, CardBody, CardHeader } from "./Card.style";

export const Card: React.FC<CardProps> = ({ header, children}) => {
  return (
    <CardWrapper>
      <CardHeader>{header}</CardHeader>
      <CardBody className="card-body">
        {children}
      </CardBody>
    </CardWrapper>
  );
};
