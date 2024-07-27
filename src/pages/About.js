import React from 'react'
import '../style/About.css'
import about from '../assets/about.jpg'
import { aboutThings } from '../helper/helper'

const About = () => {
  return (
    <div className='about' id='sobrenos'>
      <img className='aboutImg' src={about} alt='about' />
      <div className='aboutContainer'>
        <div className='aboutTitle'>
          <h6>Sobre Nos</h6>
          <div className='aboutSeparator'></div>
        </div>
        <h4 className='AbountSubTitle'>
          <b className='dBlue'>Cuidados dentários</b>
          <br />
          <b className='lBlue'>que fazem você sorrir</b>
        </h4>
        <p className='description'>Na Clínica OdontoSmile, nossa missão é cuidar do seu sorriso com dedicação e excelência. Oferecemos uma ampla gama de serviços dentários para garantir que você e sua família mantenham a saúde bucal em dia, com o máximo conforto e cuidado.</p>
        <div >
          {aboutThings.map((abouts, index) => {
            return (
              <div key={index} className='aboutThings'>
                <img className='aboutIco' src={abouts.image} alt='icon ' />
                <div className='thingsContainer'>
                  <h6 className='dBlue'>{abouts.name}</h6>
                  <p className='description'>{abouts.description}</p>
                </div>

              </div>

            )
          })}
        </div>
      </div>


    </div>
  )
}

export default About