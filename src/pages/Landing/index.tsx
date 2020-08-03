import React from 'react';
import {Link} from 'react-router-dom'
import LogoImg from '../../assets/images/logo.svg'
import LandingImg from '../../assets/images/landing.svg'
import StudyIcon from '../../assets/images/icons/study.svg'
import './styles.css'
import GiveClass from '../../assets/images/icons/give-classes.svg'
import Purple from '../../assets/images/icons/purple-heart.svg'

export default function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={LogoImg} alt="Logo da Página" />
                    <h2>Sua plataforma de estudo online.</h2>


                </div>
                <img src={LandingImg} alt="Plataforma de estudos" className="hero-image" />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={StudyIcon} alt="Estudar" />
                        Estudar
                    </Link>

                    <Link to="give-classes" className="give-classes">
                        <img src={GiveClass} alt="Dar aulas" />
                        Dar Aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={Purple} alt="Coração roxo"/>
                </span>

            </div>


        </div>
    )
}