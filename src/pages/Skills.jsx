import React from 'react';
import '../App.css'
import angular from '../assets/images/angular.svg'
import bootstrap from '../assets/images/bootstrap.svg'
import css3 from '../assets/images/css3.svg'
import git from '../assets/images/git.svg'
import github from '../assets/images/github.png'
import html5 from '../assets/images/html5.svg'
import javascript from '../assets/images/javascript.svg'
import nodejs from '../assets/images/nodejs.svg'
import react from '../assets/images/react.svg'
import sass from '../assets/images/sass.svg'
import typescript from '../assets/images/typescript.svg'
import vuejs from '../assets/images/vuejs.svg'
import { useTranslation } from 'react-i18next';


export function Skills() {

    const { t } = useTranslation()

    return (
        <div className='page'>
            <div className='pagetitle'>
                <h1>{t('skills.title')}</h1>
            </div>

            <div className='pagetitle pagetitle-child'>
                <h3>{t('skills.learned')}</h3>
            </div>

            <div className='skills'>
                <img src={html5} alt='html5'></img>
                <img src={css3} alt='css3'></img>
                <img src={javascript} alt='javascript'></img>
                <img src={react} alt='react'></img>
                <img src={sass} alt='sass'></img>
                <img src={git} alt='git'></img>
                <img src={github} alt='github'></img>
            </div>

            <div className='pagetitle pagetitle-child'>
                <h3>{t('skills.learning')}</h3>
            </div>

            <div className='skills'>
                <img src={angular} alt='angular'></img>
                <img src={vuejs} alt='vuejs'></img>
                <img src={nodejs} alt='nodejs'></img>
                <img src={typescript} alt='typescript'></img>
                <img src={bootstrap} alt='bootstrap'></img>
            </div>

        </div>
    );
}

