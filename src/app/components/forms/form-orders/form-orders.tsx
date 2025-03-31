'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import Button from '@/ui/button/button';
import Icon from '@/ui/icon/icon';
import Delivery from '@/assets/delivery.svg';
import Pickup from '@/assets/pickup.svg';
import FormDonePopup from '@/app/components/popup/form-done/form-done';
import ShoppingCartMini from '@/app/components/shopping-cart-mini/shopping-cart-mini';

import styles from './form-orders.module.scss';
import { CheckboxState, CheckboxChangeEvent, FormOrdersProps } from './form-order.types';

export default function FormOrders({ setSelectedDelivery, clearCart }: FormOrdersProps) {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitted' | 'error'>('idle');
  const [selectedDelivery, setSelectedDeliveryLocal] = useState<'delivery' | 'pickup'>('delivery');
  const [isChecked, setIsChecked] = useState<CheckboxState>(false);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    adress: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
    adress: false
  });

  const handleCheckboxChange = (event: CheckboxChangeEvent): void => {
    setIsChecked(event.target.checked);
  };

  const validateName = (name: string) => {
    const namePattern = /^[А-Яа-яЁё\s]+$/;
    return namePattern.test(name);
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const validatePhone = (phone: string) => {
    const phonePattern = /^(\+7|8)?\s?(\(\d{3}\)|\d{3})\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
    return phonePattern.test(phone);
  };

  const validateMessage = (message: string) => {
    const scriptOrLinkPattern = /<script.*?>.*?<\/script>|<a.*?>.*?<\/a>/i;
    return message.trim() !== '' && !scriptOrLinkPattern.test(message);
  };

  const validateAdress = (adress: string) => {
    const scriptOrLinkPattern = /<script.*?>.*?<\/script>|<a.*?>.*?<\/a>/i;
    return adress.trim() !== '' && !scriptOrLinkPattern.test(adress);
  };

  const validateForm = () => {
    const newErrors = {
      name: !validateName(formData.name),
      email: !validateEmail(formData.email),
      phone: !validatePhone(formData.phone),
      message: !validateMessage(formData.message),
      adress: !validateAdress(formData.adress),
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

    if (!validatePhone(formData.phone) || !validateName(formData.name) || !validateEmail(formData.email) || !validateMessage(formData.message) || !validateAdress(formData.adress)) {
      setFormStatus('error');
      return;
    }

    if (!formData.name || !formData.phone || !formData.email || !formData.message || !formData.adress) {
      setFormStatus('error');
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus('submitted');
      clearCart();

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        adress: ''
      });

      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
        router.push('/home');
      }, 3000);

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

  const inputStyles = (field: 'name' | 'phone' | 'email' | 'message' | 'adress') => {
    return errors[field] ? `${styles.error}` : '';
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div className={`${styles.input} ${inputStyles('name')}`} data-validate-type="text" data-limitation="name" data-message-base="Поле обязательно к заполнению" data-message-extra="Проверьте корректность заполнения поля" data-required="data-required">
          <label>
            <span className={styles.customLabel}>ФИО*</span>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={`${styles.input} ${inputStyles('email')}`} data-validate-type="email" data-message-base="Поле обязательно к заполнению" data-required="data-required">
          <label>
            <span className={styles.customLabel}>Email*</span>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={`${styles.input} ${inputStyles('phone')}`} data-validate-type="phone" data-message-base="Поле обязательно к заполнению" data-required="data-required">
          <label>
            <span className={styles.customLabel}>Телефон*</span>
            <input
              type='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={`${styles.input} ${styles.textarea} ${inputStyles('message')}`} data-validate-type="text">
          <label>
            <span className={styles.customLabel}>Комментарии к&nbsp;заказу:</span>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <div className={`${styles.input} ${styles.deliveryChange}`}>
          <label>
            <span className={styles.customLabel}>Способ доставки:</span>
            <div className={styles.customWrapperRadio}>
              <div className={styles.customToggle} data-validate-type="checkbox" data-message-base="Поле обязательно к заполнению">
                <label className={selectedDelivery === 'delivery' ? styles.checked : ''}>
                  <input
                    type="radio"
                    value="delivery"
                    name="deliveryType"
                    className={styles.hiddenInput}
                    checked={selectedDelivery === 'delivery'}
                    onChange={() => {
                      setSelectedDeliveryLocal('delivery');
                      setSelectedDelivery('delivery');
                    }}
                  />
                  <Icon path={Delivery} width={30} height={30} />
                  <span className={styles.customToggleText}>Доставка</span>
                </label>
              </div>
              <div className={styles.customToggle} data-validate-type="checkbox" data-message-base="Поле обязательно к заполнению">
                <label className={selectedDelivery === 'pickup' ? styles.checked : ''}>
                  <input
                    type="radio"
                    value="pickup"
                    name="deliveryType"
                    className={styles.hiddenInput}
                    checked={selectedDelivery === 'pickup'}
                    onChange={() => {
                      setSelectedDeliveryLocal('pickup');
                      setSelectedDelivery('pickup');
                    }}
                  />
                  <Icon path={Pickup} width={48} height={23} />
                  <span className={styles.customToggleText}>Самовывоз</span>
                </label>
              </div>
            </div>
          </label>
        </div>
        <div className={`${styles.input} ${inputStyles('adress')}`} data-validate-type="text">
          <label>
            <span className={styles.customLabel}>Адрес доставки:</span>
            <input
              type='text'
              name='adress'
              value={formData.adress}
              onChange={handleChange}
            ></input>
          </label>
        </div>

        {showPopup && (
          <FormDonePopup />
        )}

        {isMobileScreen && (
          <ShoppingCartMini selectedDelivery={selectedDelivery} />
        )}

        <div className={styles.btn} >
          {formStatus === 'error' ? (
            <span className={styles.statusError}>Неверно, проверьте корректность введенных данных!</span>
          ) : (
            <Button type={'submit'} >Оформить заказ</Button>
          )}
        </div>
        <div className={styles.customToggle} data-validate-type="checkbox" data-message-base="Поле обязательно к заполнению">
          <label className={`${styles.customLabelCheckbox} ${isChecked ? styles.checked : ''}`}>
            <input
              type="checkbox"
              value="agree"
              name="agree"
              className={styles.customInputCheckbox}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className={styles.customControlMark}></span>
            <span className={styles.customToggleText}>Я&nbsp;согласен на&nbsp;обработку моих&nbsp;<Link className={styles.privacyPolicyLink} href={'/privacy-policy'} target={'_blank'}>персональных данных</Link></span>
          </label>
        </div>
      </form>
    </div>
  )
}
