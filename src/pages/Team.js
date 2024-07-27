import React from 'react'
import '../style/Team.css'
import team01 from '../assets/team01.png'
import team02 from '../assets/team02.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Team = () => {
    return (
        <div className='team' id='team'>
        <h4 className='dBlue teamTitle'>Equipe</h4>
        <p>
        <b className='dBlue'>Conheça nossa </b>
        <b className='lBlue'>Equipe</b> </p>
            <div className='teamWrapper'>

                <div className='teamContainer'>
                    <img src={team01} alt='foto time' />
                    <h4 className='dBlue'>Alice Simões</h4>
                    <p className='lBlue'>Clínico geral e Odontopediatria</p>
                    <div className='teamMedia'>
                        <FacebookIcon/>
                        <XIcon/>
                        <InstagramIcon/>
                        <YouTubeIcon/>
                    </div>
                </div>

                <div className='teamContainer'>
                    <img src={team02} alt='foto time' />
                    <h4 className='dBlue'>Mauro Junior Carvalho</h4>
                    <p className='lBlue'>Endodontia,Implantodontia e Ortodontia</p>
                    <div className='teamMedia'>
                        <FacebookIcon/>
                        <XIcon/>
                        <InstagramIcon/>
                        <YouTubeIcon/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Team