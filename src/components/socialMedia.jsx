import React from 'react';

export function SocialMedia(){

    return (
    <div className='wrapper'>

        <div className='icon facebook'>
            <div className='tooltip' >Facebook</div>
                <span> <a href='https://www.facebook.com/DanielRamonCampos/'><i className='fab fa-facebook-f'></i> </a></span>
        </div>

        <div className='icon twitter'>
            <div className='tooltip'>Twitter</div>
                <span> <a href='https://twitter.com/Riku0h'><i className='fab fa-twitter'></i></a></span>
        </div>

        <div className='icon github'>
            <div className='tooltip'>github</div>
                <span><a href='https://github.com/xRiiku'><i className='fab fa-github'></i></a></span>
        </div>

        <div className='icon instagram'>
            <div className='tooltip'>Instagram</div>
                <span><a href='https://www.instagram.com/daniel_rc89/'><i className='fab fa-instagram'></i></a></span>
        </div>

        <div className='icon linkedin'>
            <div className='tooltip'>Linkedin</div>
                <span><a href='https://www.linkedin.com/in/daniel-ram%C3%B3n-campos-0ab4b4254/'><i className='fab fa-linkedin-in'></i></a></span>
        </div>

        <div className='icon whatsapp'>
            <div className='tooltip'>WhatsApp</div>
                <span><a href='https://wa.me/662078485'><i className='fab fa-whatsapp'></i></a></span>
        </div>

        <div className='icon discord'>
            <div className='tooltip'>Discord</div>
                <span><a href='https://discordapp.com/users/xRiku#2506'><i className='fab fa-discord'></i></a></span>
        </div>

        <div className='icon mail'>
            <div className='tooltip'>Mail</div>
                <span><a href='mailto:riku@rikudev.com'><i className='fab fa-at'></i></a></span>
        </div>


    </div>
    );
}

