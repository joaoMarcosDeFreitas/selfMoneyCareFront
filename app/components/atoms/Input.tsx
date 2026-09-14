//use state para gerenciar o estado do componente Input, permitindo que ele seja controlado e atualizado conforme o usuário interage com ele.
import { useState } from "react";

//define as propriedades do componente Input, incluindo placeholder, valor, função de mudança, tipo, cor, tamanho da fonte, peso da fonte, cor de fundo e raio da borda.
interface InputProps {
    placeholder: string;
    type?: 'text' | 'password' | 'email' | 'number';
    color?: string;
    fontSize?: 'sm' | 'md' | 'lg' | 'xl';
    fontWeight?: 'normal' | 'bold' | 'semibold' | 'extrabold';
    backgroundColor?: string;
    borderRadius?: 'sm' | 'md' | 'lg' | 'xl';
}

//define objetos que mapeiam os tamanhos de fonte, pesos de fonte e raios de borda para suas classes correspondentes do Tailwind CSS.
const fontSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
};

//define um objeto que mapeia os pesos de fonte para suas classes correspondentes do Tailwind CSS.
const fontWeightClasses = {
    normal: 'font-normal',
    bold: 'font-bold',
    semibold: 'font-semibold',
    extrabold: 'font-extrabold',
};

//define um objeto que mapeia os raios de borda para suas classes correspondentes do Tailwind CSS.
const borderRadiusClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
};

//atomo de input, utilizado para exibir campos de entrada em diferentes partes da aplicação
export function Input({placeholder, type = 'text', color = 'black', fontSize = 'md', fontWeight = 'normal', backgroundColor = 'gray', borderRadius = 'md'}: InputProps) {
    //value será o valor atual do input, e setValue será a função para atualizar esse valor.
    const [value, setValue] = useState('');
    
    return(
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(event) => { setValue(event.target.value)}}
            className={`${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]} ${borderRadiusClasses[borderRadius]} font-valley p-2`}
            style={{color: color, backgroundColor: backgroundColor}}
        />
    );
}