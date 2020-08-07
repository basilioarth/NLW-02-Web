import React, { InputHTMLAttributes } from 'react';
// InputHTMLAttributes são todos os atributos que um input padrão pode receber

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FunctionComponent<InputProps> = ({ label, name,  ...rest}) => {
// É dessa forma que definimos um componente com as propriedades tipadas
// o '...rest' se chama rest operator e é um objeto que vai recever todas as outras propriedades que
// "sobrarem" (que, no caso, não são nem a label, bem a name)
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>
    );
}

export default Input;
