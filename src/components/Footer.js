import React from 'react'
import '../style/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <iframe id='frameMap' width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=avenida%20rio%20branco%20rio%20de%20janeiro+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/"></a></iframe>
            </div>
            <div className='footerContainer'>
                <p>&#169;A Fihr Site</p>
                <p>OtontoSmile - Consultorio Dentário</p>

            </div>
        </div>
    )
}

export default Footer