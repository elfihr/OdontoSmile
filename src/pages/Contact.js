import React from 'react'
import '../style/Contact.css'

const Contact = () => {
    return (
        <div>
            <div className='contact' id='contato'>
                <h3>Contato &#x268A;</h3>
                <div className='contactsWrapper'>
                    <div className='contactContainer'>
                        <h4>Endereço</h4>
                        <p>Av. Rio Branco nº1550</p>
                        <p>Rio de Janeiro - RJ</p>
                    </div>
                    <div className='contactContainer'>
                        <h4>Horario de Funcionamento</h4>
                        <p>Seg~Sex</p>
                        <p>09:00 às 18:00</p>
                    </div>
                    <div className='contactContainer'>
                        <h4>Telefone e E-mail</h4>
                        <p>(21) 2643-xxxx</p>
                        <p>(21) 99055-xxxx</p>
                        <p>odontoSmile@os.com.br</p>
                    </div>
                    <div className='contactContainer'>
                        <h4>Agende agora por Whatsapp</h4>
                        <div className='whatsBtn'>
                            <i className="fa-brands fa-whatsapp"></i>Clique Aqui
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact