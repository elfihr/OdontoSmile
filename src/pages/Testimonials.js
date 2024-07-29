import React from 'react'
import '../style/Testimonials.css'
import { testimonials } from '../helper/helper'
import { Fade } from "react-awesome-reveal";

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
                            <Fade>
                                <div key={index} className='testimonialsReview'>
                                    <div className='clientProfile dBlue'>
                                        <img className='client ' src={client.image} alt='imagem de cliente' />
                                        <h4>{client.name}

                                        </h4>
                                    </div>
                                    <p className='clientProfileDesciption '>"{client.description}"</p>
                                </div>
                            </Fade>
                            
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Testimonials