import React from 'react';
import '../App.css'
import { SocialMedia } from '../components/socialMedia';
import { useTranslation } from 'react-i18next';


export function Home() {

    const { t } = useTranslation()

    return (
        <div className='page'>
            <div className='pagetitle'>
                <h1>{t('home.title')}</h1>
            </div>

            <div className='homeInfo'>
                <span>{t('home.welcome')}</span>
                <span className='typing-demo'>Daniel Ramon "RikuDev"</span>
                <span>{t('home.student')}</span>
                <span>{t('home.description')}</span>
            </div>

            <div className='socialmedia'>
                <SocialMedia />
            </div>

        </div>
    );
}

