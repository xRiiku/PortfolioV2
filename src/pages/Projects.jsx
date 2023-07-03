import React from 'react';
import '../App.css'
import portfolioV2 from '../assets/images/portfolioV2.jpg'
import portfolioV1 from '../assets/images/portfolioV1.jpg'
import puzzle from '../assets/images/puzzle.jpg'
import coinbase from '../assets/images/coinbase.jpg'
import numberCount from '../assets/images/numberCount.jpg'
import clock from '../assets/images/clock.jpg'
import { useTranslation } from 'react-i18next';


export function Projects() {

    const { t } = useTranslation()

    return (
        <div className='projects-page'>
            <div className='pagetitle'>
                <h1>{t('projects.title')}</h1>
            </div>

        <div className='container'>
            <main className='grid'>

                <article>
                    <img src={portfolioV2} alt='portfolioV2' />
                        <i className='fa-brands fa-html5'></i>
                        <i className='fa-brands fa-css3'></i>
                        <i className='fa-brands fa-js'></i>
                        <i className='fa-brands fa-react'></i>
                    <div className='text'>
                        <h3>{t('projects.portfoliov2')}</h3>
                        <p>{t('projects.portfolio2Desc')}</p>
                        <a href='https://portfolio2.rikudev.com'><input type='button' value={t('projects.button')}/></a>
                    </div>
                </article>


                <article>
                    <img src={puzzle} alt='puzzle' />
                        <i className='fa-brands fa-html5'></i>
                        <i className='fa-brands fa-css3'></i>
                        <i className='fa-brands fa-js'></i>
                    <div className='text'>
                        <h3>{t('projects.puzzle')}</h3>
                        <p>{t('projects.puzzleDesc')}</p>
                        <a href='https://puzzle.rikudev.com/'><input type='button' value={t('projects.button')}/></a>
                    </div>
                </article>

                <article>
                    <img src={coinbase} alt='coinbase' />
                        <i className='fa-brands fa-html5'></i>
                        <i className='fa-brands fa-sass'></i>
                        <i className='fa-brands fa-bootstrap'></i>
                    <div className='text'>
                        <h3>{t('projects.clone')}</h3>
                        <p>{t('projects.cloneDesc')}</p>
                        <a href='https://coinbase.rikudev.com/'><input type='button' value={t('projects.button')}/></a>
                    </div>
                </article>

                <article>
                    <img src={clock} alt='clock' />
                        <i className='fa-brands fa-html5'></i>
                        <i className='fa-brands fa-css3'></i>
                        <i className='fa-brands fa-js'></i>
                    <div className='text'>
                        <h3>{t('projects.watch')}</h3>
                        <p>{t('projects.watchDesc')}</p>
                        <a href='https://watch.rikudev.com/'><input type='button' value={t('projects.button')}/></a>
                    </div>
                </article>

                <article>
                    <img src={portfolioV1} alt='portfolioV1' />
                        <i className='fa-brands fa-html5'></i>
                        <i className='fa-brands fa-css3'></i>
                        <i className='fa-brands fa-js'></i>
                    <div className='text'>
                        <h3>{t('projects.portfoliov1')}</h3>
                        <p>{t('projects.portfoliov1Desc')}</p>
                        <a href='https://portfolio1.rikudev.com/'><input type='button' value={t('projects.button')}/></a>
                    </div>
                </article>

            </main>

        </div>
</div>

    );
}
