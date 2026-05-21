import type { ComponentPropsWithoutRef} from "react";

// Estender os atributos nativos limpa o código e dá suporte a tudo (id, className, style, etc.)
export interface IButtonProps extends ComponentPropsWithoutRef<"button"> {
    title: string;
}