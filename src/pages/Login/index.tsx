import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, LoginContainer, Column, Title } from "./styles";
import { defaultValues } from "./types";
import type { IFormLogin } from "./types";

const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string().min(6, "No mínimo 6 caracteres").required("Campo obrigatório"),
}).required();

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues,
  });

  const onSubmit = (data: IFormLogin) => {
    console.log("Dados enviados com sucesso:", data);
  };

  return (
    <Container>
      <LoginContainer as="form" onSubmit={handleSubmit(onSubmit)}>
        <Column>
          <Title>Login</Title>
          
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors.email?.message}
          />
          
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors.password?.message}
          />
          
          <Button 
            title={isSubmitting ? "Carregando..." : "Entrar"} 
            type="submit"
            disabled={!isValid || isSubmitting}
          />
        </Column>
      </LoginContainer>
    </Container>
  );
};
