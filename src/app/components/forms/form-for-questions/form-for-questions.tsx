'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/ui/button/button';
import styles from './form-for-questions.module.scss';

export default function FormForQuestions() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitted' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false
  });

  const validatePhone = (phone: string) => {
    const phonePattern = /^(\+7|8)?\s?(\(\d{3}\)|\d{3})\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
    return phonePattern.test(phone);
  };

  const validateName = (name: string) => {
    const namePattern = /^[А-Яа-яЁё\s]+$/;
    return namePattern.test(name);
  };

  const validateForm = () => {
    const newErrors = {
      name: !validateName(formData.name),
      phone: !validatePhone(formData.phone)
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

    if (!validatePhone(formData.phone) || !validateName(formData.name)) {
      setFormStatus('error');
      return;
    }

    if (!formData.name || !formData.phone) {
      setFormStatus('error');
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus('submitted');

      setFormData({
        name: '',
        phone: ''
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

  const inputStyles = (field: 'name' | 'phone') => {
    return errors[field] ? `${styles.error}` : '';
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>Остались вопросы?</h2>
      <p>Оставьте свой&nbsp;номер телефона, и&nbsp;мы&nbsp;Вам&nbsp;поможем</p>
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
        <div className={`${styles.input} ${inputStyles('phone')}`} data-validate-type="phone" data-message-base="Поле обязательно к заполнению" data-required="data-required">
          <label>
            <input
              type='phone'
              name='phone'
              placeholder='Ваш номер'
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.text}>
          <p>Нажимая на&nbsp;кнопку &quot;отправить&quot;, вы&nbsp;даете согласие на&nbsp;обработку своих <Link className={styles.privacyPolicyLink} href={'/privacy-policy'} target={'_blank'}>персональных данных</Link></p>
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
