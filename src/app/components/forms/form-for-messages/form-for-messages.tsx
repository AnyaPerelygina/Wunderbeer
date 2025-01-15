'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/ui/button/button';
import styles from './form-for-message.module.scss';

interface FormForMessagesProps {
  mod?: 'white' | 'black';
}

export default function FormForMessages({ mod = 'black' }: FormForMessagesProps) {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitted' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const validateName = (name: string) => {
    const namePattern = /^[А-Яа-яЁё\s]+$/;
    return namePattern.test(name);
  };

  const validateMessage = (message: string) => {
    const scriptOrLinkPattern = /<script.*?>.*?<\/script>|<a.*?>.*?<\/a>/i;
    return message.trim() !== '' && !scriptOrLinkPattern.test(message);
  };

  const validateForm = () => {
    const newErrors = {
      name: !validateName(formData.name),
      email: !validateEmail(formData.email),
      message: !validateMessage(formData.message)
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      setFormStatus('error');
      return;
    }

    if (!validateEmail(formData.email) || !validateName(formData.name) || !validateMessage(formData.message)) {
      setFormStatus('error');
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus('submitted');

      setFormData({
        name: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        setFormStatus('idle');
      }, 2000);
    } catch (error) {
      setFormStatus('error');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: false
      });
    }

    if (formStatus === 'error') {
      setFormStatus('idle');
    }
  };

  const inputStyles = (field: 'name' | 'email' | 'message') => {
    return errors[field] ? `${styles.error}` : '';
  };

  return (
    <div className={`${styles.form} ${mod === 'black' ? styles.formBlack : styles.formWhite}`}>
      <h2 className={styles.title}>Оставьте для&nbsp;нас&nbsp;сообщение и&nbsp;мы&nbsp;ответим</h2>
      <form onSubmit={handleSubmit}>
        <div className={`${styles.input} ${inputStyles('name')}`} data-validate-type="text" data-limitation="name" data-message-base="Поле обязательно к заполнению" data-message-extra="Проверьте корректность заполнения поля" data-required="data-required">
          <label>
            <input
              type='text'
              name='name'
              placeholder='Ваше имя'
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={`${styles.input} ${inputStyles('email')}`} data-validate-type="email" data-message-base="Поле обязательно к заполнению" data-required="data-required">
          <label>
            <input
              type='email'
              name='email'
              placeholder='Ваш email'
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={`${styles.textarea} ${inputStyles('message')}`} data-validate-type="text" data-required="data-required">
          <label>
            <textarea
              name='message'
              placeholder='Ваше сообщение...'
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <div className={styles.text}>
          <p>Нажимая на&nbsp;кнопку “отправить”, вы&nbsp;даете согласие на&nbsp;обработку своих <Link className={styles.privacyPolicyLink} href={'/privacy-policy'} target={'_blank'}>персональных данных</Link></p>
        </div>
        {formStatus === 'submitted' ? (
          <span className={styles.statusSubmitted}>Отправлено!</span>
        ) : formStatus === 'error' ? (
          <span className={styles.statusError}>Неверно, проверьте корректность введенных данных!</span>
        ) : (
          <Button type={'submit'}>Отправить</Button>
        )}
      </form>
    </div>
  );
}
