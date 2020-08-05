import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/65097836?s=400&u=c539d1df5be7cbfeefbf632aed46963d29ec7506&v=4" alt="Arthur Basílio"/>
                <div>
                    <strong>Arthur Basílio</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de física avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. 
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato.
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;