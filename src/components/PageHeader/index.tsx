import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './styles.css';

interface PageHeaderProps {
    title: string;
}

const  PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    // PageHeader é um componente. Ele é um Function Component la´de
    // dentro do React e as propriedades que ele tem/pode receber são
    // as especificadas em PageHeaderProps
    // Para pegarmos os "argumentos" que estão sendo passados na "chamada" do
    // componente, utilizamos o "parâmetro" props
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Logo Proffy"/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                
                {props.children}
            </div>

        </header>
    );
}

export default PageHeader;

// Os componentes não sabem que precisam receber elementos a serem
// passados pra ele. Uma maneira de possibilitarmos essa flexibilidade
// de dinamizar o conteúdo de um componente é fazendo a tipagem do nosso
// componente.
// Para realizar a tipagem, transformamos o componente em uma função
// escrita no formato de constante para interagir com a interface dele
// (que será justamente o que dirá a esse componente o que ele deve/pode receber)
// como parâmetro.
// O children é uma propriedade automática do React, ela existe em todos os componentes
// e se trata de qual é o conteúdo que foi passado para o componente (aquilo que foi
// literalmente escrito dentro das tags da "chamada" do componente).