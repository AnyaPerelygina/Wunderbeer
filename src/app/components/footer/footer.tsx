import Logo from '../logo/logo';
import Social from '../social/social';
import Contacts from '../contacts/contacts';
import Nav from '../nav/nav';

export default function Footer() {
  function handleLinkClick(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
          <Logo className={'logo logo-footer'}/>
          <p>В&nbsp;ассортименте в&nbsp;большом разнообразии представлены хмельные напитки собственного изготовления, а&nbsp;также от&nbsp;проверенных и&nbsp;надёжных партнёров.</p>
          <Social className={'social social-footer'} SocialLinks={[]} onLinkClick={handleLinkClick} />
          <Contacts className={'contacts'} navLinks={[]} onLinkClick={handleLinkClick} />
          <Nav className={'nav nav-footer'} navLinks={[]} onLinkClick={handleLinkClick} />
          <div className='footer__copyright'>
            <span>ООО “Вундербир” 2010 - 2020</span>
            <span>Все права защищены ©</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
