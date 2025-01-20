import { basePath } from '@/const';
import Image from 'next/image';

import { Container } from '@/app/components/container/container';

import styles from './how-buy.module.scss';

export default function HowBuy() {
  return (
    <section className={styles.root}>
      <div className={styles.background}>
        <Image
          src={`${basePath}/how-buy/background-hops.webp`}
          width={1918}
          height={659}
          alt="Фоновое изображение."
        />
      </div>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Как&nbsp;купить</h2>
          <div className={styles.text}>
            <p>Вы&nbsp;можете оплатить покупку в&nbsp;нашем&nbsp;интернет-магазине с&nbsp;помощью банковских карт.</p>
            <p>Для&nbsp;выбора оплаты товара с&nbsp;помощью банковской карты на&nbsp;соответствующей странице необходимо нажать кнопку Оплата заказа банковской картой.</p>
            <p>При&nbsp;оформлении заказа выберите способ оплаты банковской картой, нажмите &quot;Оформить заказ&quot; и&nbsp;затем – &quot;Оплатить онлайн&quot;</p>
            <p>В&nbsp;большинстве случаев средства поступают на&nbsp;наш&nbsp;счёт моментально. Комиссия 0%.</p>
            <p>Данный вид оплаты доступен только&nbsp;для&nbsp;физических лиц.</p>
            <p>Для&nbsp;оплаты (ввода реквизитов Вашей&nbsp;карты) Вы&nbsp;будете перенаправлены на&nbsp;платёжный шлюз ПАО СБЕРБАНК. Соединение с&nbsp;платёжным шлюзом и&nbsp;передача информации осуществляется в&nbsp;защищённом режиме с&nbsp;использованием протокола шифрования SSL. В&nbsp;случае если&nbsp;Ваш&nbsp;банк поддерживает технологию безопасного проведения интернет-платежей Verified By&nbsp;Visa, MasterCard SecureCode, MIR Accept, J-Secure для&nbsp;проведения платежа также&nbsp;может&nbsp;потребоваться ввод специального пароля.</p>
            <p>Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации обеспечивается ПАО&nbsp;СБЕРБАНК. Введённая информация не&nbsp;будет предоставлена третьим лицам за&nbsp;исключением случаев, предусмотренных законодательством&nbsp;РФ. Проведение платежей по&nbsp;банковским картам осуществляется в&nbsp;строгом соответствии с&nbsp;требованиями платёжных систем МИР, Visa Int., MasterCard Europe Sprl, JCB.</p>
            <p>Возврат переведённых средств, производится на&nbsp;ваш&nbsp;банковский счёт в&nbsp;течение 5-30 рабочих дней (срок зависит от&nbsp;банка, который выдал вашу&nbsp;банковскую карту).</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
