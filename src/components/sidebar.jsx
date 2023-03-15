import React from 'react';
import { useState } from 'react';
import { Logo } from './Logo';
import { NavLink } from "react-router-dom";
import '../App.css'
import { useTranslation } from 'react-i18next';
import { EngWave } from './Language'
import { EspWave } from './Language'


export function Sidebar() {

    const { i18n } = useTranslation();
    const [language, setLenguage] = useState('es');

    const onChangeLanguage = () => {
        i18n.changeLanguage(language);
            if (language === 'en') {
                setLenguage('es');
            } else {
                setLenguage('en');
            }
    };

    
    return (
        <div className='mySideNav'>

        <div className='logo'>
            <Logo />
        </div>

        <div className='menu'>
            <NavLink to='/Home' activeclassname='active'><i className='fa fa-fw fa-house'></i></NavLink>
            <NavLink to='/Skills' activeclassname='active'><i className='fa fa-fw fa-spinner'></i></NavLink>
            <NavLink to='/Projects' activeclassname='active'><i className='fa fa-fw fa-plane'></i></NavLink>
            <NavLink to='/Contact' activeclassname='active'><i className='fa fa-fw fa-paper-plane'></i></NavLink>
        </div>

        <div className='language'>
            <NavLink onClick={onChangeLanguage}> {language === 'en' ? <EngWave /> : <EspWave />}</NavLink>
        </div>
            
        </div>
    );
}


