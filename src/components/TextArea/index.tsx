import React, { TextareaHTMLAttributes } from 'react';
// TextAreaHTMLAttributes são todos os atributos que um TextArea padrão pode receber

import './styles.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const TextArea: React.FunctionComponent<TextAreaProps> = ({ label, name,  ...rest}) => {
// É dessa forma que definimos um componente com as propriedades tipadas
// o '...rest' se chama rest operator e é um objeto que vai recever todas as outras propriedades que
// "sobrarem" (que, no caso, não são nem a label, bem a name)
    return (
        <div className="textArea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest}/>
        </div>
    );
}

export default TextArea;
