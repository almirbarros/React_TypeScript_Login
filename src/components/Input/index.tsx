import { Controller } from "react-hook-form";
import { InputContainer, ErrorMessage } from "./styles";
import type { InputProps } from "./types";

export const Input = ({ control, name, errorMessage, ...rest }: InputProps) => {
  return (
    <>
      <InputContainer $hasError={!!errorMessage}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value = "", ref } }) => (
            <input
              {...rest}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
            />
          )}
        />
      </InputContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};
