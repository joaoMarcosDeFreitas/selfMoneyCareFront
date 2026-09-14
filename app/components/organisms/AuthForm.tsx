//define que este arquivo é um componente do lado do cliente, permitindo o uso de hooks e outros recursos do React.
'use client';

import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";
import { Input } from "../atoms/Input";
import { FormField } from "../molecules/FormField";
import { AuthContext } from "@/app/contexts/AuthContext";
import { useContext } from "react";

// O componente AuthForm é um formulário de autenticação que utiliza os componentes Button, Text, Input e FormField para criar uma interface de usuário para login. Ele é estilizado com classes do Tailwind CSS para layout e aparência.
export function AuthForm() {
    const { login } = useContext(AuthContext);

    return(
        <div className="flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-4 w-full">
                <FormField
                    label={<Text text="Email" color="black" fontSize="md" fontWeight="normal" />}
                    input={<Input type="email" placeholder="Digite seu email" backgroundColor="#88BDA4" />}
                />
                <FormField
                    label={<Text text="Senha" color="black" fontSize="md" fontWeight="normal" />}
                    input={<Input type="password" placeholder="Digite sua senha" backgroundColor="#88BDA4" />}
                />
            </div>
            <Button text="Entrar" onClick={login} backgroundColor="#B1D3B9" color="#778873" />
            <div className="flex flex-col items-center gap-2">
                <Text text="Esqueceu sua senha?" color="#778873" fontSize="sm" fontWeight="normal" cursor="pointer" transition="all" duration="200" hover="brightness-90" />
                <Text text="Registre-se" color="#778873" fontSize="sm" fontWeight="bold" cursor="pointer" transition="all" duration="200" hover="brightness-90" />
            </div>
        </div>
    )
}