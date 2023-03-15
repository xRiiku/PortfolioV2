import React from 'react';
import '../App.css'
import { useTranslation } from 'react-i18next';
import useForm from '../components/useForm';

export function Contact() {

    const { t } = useTranslation()


    const initialData = {
        name: '',
        email: '',
        topic: '',
        message: ''
    }
    
    const onValidate = (form) => {

        let errors = {}
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexComments = /^.{1,255}$/;
    
        if (!form.name.trim()) {
            errors.name = t('error.name')
        } else if (!regexName.test(form.name)){
            errors.name = t('error.name2')
        }
    
        if (!form.email.trim()) {
            errors.email = t('error.email')
        } else if (!regexEmail.test(form.email)){
            errors.email = t('error.email2')
        }
    
        if (!form.topic.trim()) {
            errors.topic = t('error.topic')
        } else if (!regexName.test(form.topic)){
            errors.topic = t('error.topic2')
        }
    
        if (!form.message.trim()) {
            errors.message = t('error.message')
        } else if (!regexComments.test(form.message)){
            errors.message = t('error.message2')
        }
    
        return errors
    }
    
    
    const { form, errors, handleChange, handleSubmit } = useForm(initialData, onValidate)
    
    return (

    <div className='page'>
        <div className='pagetitle'>
            <h1>{t('contact.title')}</h1>
        </div>
        
        
        <div className='contactform'>
            <form onSubmit={handleSubmit}>

            <div>
                <img src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/mail-letter-offer-256.png" alt="icon" />
            </div>

                <input type="text" placeholder={t('contact.name')} name="name" value={form.name} onChange={handleChange}/>
                <span>{errors.name}</span>
    
                <input type="email" placeholder={t('contact.email')} name="email" value={form.email} onChange={handleChange}/>
                <span>{errors.email}</span>
    
                <input type="text" placeholder={t('contact.topic')} name="topic" value={form.topic} onChange={handleChange}/>
                <span>{errors.topic}</span>
    
                <textarea placeholder={t('contact.message')} name="message" value={form.message} onChange={handleChange}/>
                <span>{errors.message}</span>
    
                <input type="submit" value={t('contact.send')} />
            </form>
        </div>
    </div>

    )
    


    /* return (
        
        <div className='page'>
            <div className='pagetitle'>
                <h1>{t('contact.title')}</h1>
            </div>
        
            <div className='contactform'>
                <form action="mailto:riku@rikudev.com" method="post">
                    <div>
                        <img src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/mail-letter-offer-256.png" alt="icon" />
                    </div>
                    <input type="text" placeholder={t('contact.name')} required />
                    <input type="text" placeholder={t('contact.email')} required />
                    <input type="text" placeholder={t('contact.topic')} required />
                    <textarea placeholder={t('contact.message')} required></textarea>
                    <input type="submit" value={t('contact.send')} />
                </form>
            </div>

        </div>
    ); */
}

