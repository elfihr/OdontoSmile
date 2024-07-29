import React from 'react'
import '../style/Service.css'
import { services } from '../helper/helper'

const Service = () => {
    return (
        <div className='service' id='servicos'>
            <div className='serviceTitle'>
                <h6 className='dBlue'>Serviços</h6>            
                <p>
                    <b className='dBlue'>Oferecemos Diversos </b>
                    <b className='lBlue'>Serviços</b>
                </p>
            </div>
            <div className='serviceWrapper'>
                {services.map((service, index) => {
                    return (
                        <div key={index} className='serviceContainer'>                           
                                <img src={service.image} alt='serviços' />
                                <h6 className='dBlue'>{service.title}</h6>
                                <p className='lBlue'>{service.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Service