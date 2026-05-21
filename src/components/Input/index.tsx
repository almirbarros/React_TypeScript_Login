import { useState } from "react";
import { Controller } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react"; // Importação dos ícones do olho

import { InputContainer, ErrorMessage, TogglePasswordButton } from "./styles";
import type { InputProps } from "./types";

export const Input = ({ control, name, errorMessage, type, ...rest }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  // Se o tipo original for password e o estado showPassword for verdadeiro, muda para text
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <>
      <InputContainer $hasError={!!errorMessage}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value = "", ref } }) => (
            <input
              {...rest}
              type={inputType} // Tipo dinâmico aqui
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
            />
          )}
        />
        
        {/* Renderiza o botão do olho apenas se o input original for do tipo password */}
        {type === "password" && (
          <TogglePasswordButton 
            type="button" 
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1} // Evita que o botão quebre a navegação por Tab no teclado
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </TogglePasswordButton>
        )}
      </InputContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};
