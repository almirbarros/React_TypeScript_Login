import { ButtonContainer } from "./styles";
import type { IButtonProps } from "./types";

export const Button = ({ title, onClick, disabled, type = "button" }: IButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled} type={type}>
      {title}
    </ButtonContainer>
  );
};
