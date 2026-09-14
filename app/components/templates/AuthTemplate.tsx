import { AuthForm } from "../organisms/AuthForm";
import { Text } from "../atoms/Text";

// O componente AuthTemplate é um template de autenticação que utiliza o componente AuthForm para criar uma interface de usuário para login. Ele é estilizado com classes do Tailwind CSS para layout e aparência.
export function AuthTemplate() {
    return(
        <div className="flex flex-col justify-center gap-10 bg-[#E6F2DD] p-8 rounded-lg shadow-md w-full max-w-md">
            <Text text="Bem vindo a Self Money Care" color="#778873" fontSize="xl" fontWeight="normal" />
            <AuthForm />
        </div>
    );
}