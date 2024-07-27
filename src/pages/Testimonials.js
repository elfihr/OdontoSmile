import React from 'react'
import '../style/Testimonials.css'
import { testimonials } from '../helper/helper'

const Testimonials = () => {
    return (
        <div className='testimonials' id='depoimentos'>

            <div className='testimonialsContainer'>
                <h3 className='dBlue'>Depoimentos</h3>
                <p className='titleIntro'>
                    <b className='lBlue'>Confira aqui a opinião de alguns dos nossos </b>
                    <b className='dBlue'>clientes.</b>
                </p>
                <div className='testimonialsWrapper'>
                    {testimonials.map((client, index) => {
                        return (
                            <div key={index} className='testimonialsReview'>
                                <div className='clientProfile dBlue'>
                                    <img className='client ' src={client.image} alt='imagem de cliente' />
                                    <h4>{client.name}

                                    </h4>
                                </div>
                                <p className='clientProfileDesciption '>"{client.description}"</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Testimonials