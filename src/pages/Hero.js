import React from 'react'
import '../style/Hero.css'
import { heroIntro } from '../helper/helper'

const Hero = () => {
    return (
        <div className='hero'>

            <div className='pimg1'>
                <div className='titleContainer'>
                    <h3 className='title botton'>Seu sorriso,</h3>
                    <h3 className='title top'>Nossa Prioridade</h3>
                </div>

            </div>
            <div className='wrapperHero'>
                {heroIntro.map((hero, index) => {
                return (
                    <div key={index} className='containerhero'>
                        <img src={hero.image} alt='Hero'/>
                        <h5 className='dBlue'>{hero.title}</h5>
                        <p className='lBlue'>{hero.description}</p>
                    </div>
                )
            })}
            </div>
            


        </div>




    )
}

export default Hero