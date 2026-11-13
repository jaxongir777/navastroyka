
import React from 'react'
import './Footer.css'

import Logo from './Logo.png'

const footerLinks = [
    {
        title: 'Услуги',
        links: ['Купить квартиру', 'Продать недвижимость', 'Аренда', 'Консультация']
    },
    {
        title: 'Недвижимость',
        links: ['Жилые комплексы', 'Квартиры', 'Коммерческая недвижимость', 'Новостройки']
    },
    {
        title: 'Компания',
        links: ['О нас', 'Наши проекты', 'Новости', 'Контакты']
    },
    {
        title: 'Другое',
        links: ['Частые вопросы', 'Отзывы', 'Политика конфиденциальности', 'Поддержка']
    }
]

const socialLinks = [
    { icon: '◎', label: 'Instagram', url: '#' },
    { icon: '➤', label: 'Telegram', url: '#' },
    { icon: '☎', label: 'WhatsApp', url: '#' }
]

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-container">

                    <div className="footer-header">

                        <a href="#" className="footer-logo">
                            <img src={Logo} alt="Infinity Residence" />
                        </a>

                        <div className="footer-socials">
                            {socialLinks.map((item, index) => (
                                <a
                                    href={item.url}
                                    className="footer-header-item"
                                    aria-label={item.label}
                                    key={index}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>

                    </div>

                    <div className="footer-divider"></div>

                    <ul className="footer-list">
                        {footerLinks.map((item, index) => (
                            <li className="footer-item" key={index}>
                                <h3 className="footer-link">
                                    {item.title}
                                </h3>

                                <div className="footer-item-box">
                                    {item.links.map((link, i) => (
                                        <a
                                            href="#"
                                            className="footer-box-link"
                                            key={i}
                                        >
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="footer-bottom">
                        <p>© 2026 Infinity Residence. Все права защищены.</p>

                        <a href="#">
                            Политика конфиденциальности
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
