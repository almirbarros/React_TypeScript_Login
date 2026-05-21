import type { ComponentPropsWithoutRef } from "react";
import type { Control } from "react-hook-form";
import type { IFormLogin } from "../../pages/Login/types";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  control: Control<IFormLogin, any>;
  name: "email" | "password";
  errorMessage?: string;
}
