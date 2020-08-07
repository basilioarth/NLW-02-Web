import React, { SelectHTMLAttributes } from 'react';
// SelectHTMLAttributes são todos os atributos que um Select padrão pode receber

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FunctionComponent<SelectProps> = ({ label, name, options, ...rest}) => {
// É dessa forma que definimos um componente com as propriedades tipadas
// o '...rest' se chama rest operator e é um objeto que vai recever todas as outras propriedades que
// "sobrarem" (que, no caso, não são nem a label, bem a name)
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select defaultValue="" id={name} {...rest} >
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    );
}

export default Select;
