import Logo from '../../../ui/logo/logo';
import Social from '../social/social';
import Contacts from '../contacts/contacts';
import { Container } from "../../../ui/container/container";
import Nav from '../nav/nav';

import { basePath } from '@/const';
import Image from 'next/image';

import styles from './footer.module.scss';

export default function Footer() {
  const navLinks = [
    {
      href: '/catalog',
      label: 'Каталог',
    },
    {
      href: '/distribution',
      label: 'Дистрибуция',
    },
    {
      href: '/equipment-of-shops',
      label: 'Комплектация магазинов',
    },
    {
      href: '/about-us',
      label: 'О компании',
    },
    {
      href: '/contacts',
      label: 'Контакты',
    },
    {
      href: '/privacy-policy',
      label: 'Политика конфиденциальности',
    }
  ]

  function handleLinkClick(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <footer className={styles.footer} id='footer'>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <Logo className={styles.logoFooter}/>
          <p>В&nbsp;ассортименте в&nbsp;большом разнообразии представлены хмельные напитки собственного изготовления, а&nbsp;также от&nbsp;проверенных и&nbsp;надёжных партнёров.</p>
          <Social className={styles.socialFooter} SocialLinks={[]} onLinkClick={handleLinkClick} />
          <Contacts className={styles.contacts} navLinks={[]} onLinkClick={handleLinkClick} />
          <Nav className={styles.navFooter} navLinks={navLinks} onLinkClick={handleLinkClick} />
          <div className={styles.footer__copyright}>
            <span>ООО “Вундербир” 2010 - 2024</span>
            <span>Все права защищены ©</span>
          </div>
        </div>
      </Container>
      <div className={styles.decoration}>
        <Image
          src={`${basePath}/svg/hops-line.svg`}
          width={640}
          height={196}
          alt="Изображение хмеля."
        />
        <Image
          src={`${basePath}/svg/hops-line.svg`}
          width={640}
          height={196}
          alt="Изображение хмеля."
        />
        <Image
          src={`${basePath}/svg/hops-line.svg`}
          width={640}
          height={196}
          alt="Изображение хмеля."
        />
      </div>
    </footer>
  )
}
