//define que este arquivo é um componente do lado do cliente, permitindo o uso de hooks e outros recursos do React.
'use client';

import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";
import { Input } from "../atoms/Input";
import { FormField } from "../molecules/FormField";

function consoleLog() {
    console.log('Botão clicado!');
}

export function AuthTemplate() {

    return(
        <div className="flex items-center justify-center min-h-screen bg-[#88BDA4]">
            <div className="flex flex-col items-center justify-center gap-10 bg-[#E6F2DD] p-8 rounded-lg shadow-md w-full max-w-md">
                <Text text="Autenticação" color="black" fontSize="md" fontWeight="normal" />
                <div className="flex flex-col gap-4 w-full">
                    <FormField
                        label={<Text text="Email" color="black" fontSize="md" fontWeight="normal" />}
                        input={<Input type="email" placeholder="Digite seu email" />}
                    />
                    <FormField
                        label={<Text text="Senha" color="black" fontSize="md" fontWeight="normal" />}
                        input={<Input type="password" placeholder="Digite sua senha" />}
                    />
                </div>
                <Button text="Clique aqui" onClick={consoleLog} />
            </div>
        </div>
    );
}