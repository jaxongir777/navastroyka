
import React, { useState } from 'react'
import './Header.css'

import Logo from './Logo.png'

import {
  Search,
  Heart,
  Phone,
  Menu,
  X
} from 'lucide-react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">

          <a href="#" className="header-logo">
            <img src={Logo} alt="Logo" />
          </a>

          <nav className={`header-nav ${menuOpen ? 'active' : ''}`}>
            <ul className="header-list">
              <li className="header-item">
                <a className="header-link" href="#">Услуги</a>
              </li>

              <li className="header-item">
                <a className="header-link" href="#">О нас</a>
              </li>

              <li className="header-item">
                <a className="header-link" href="#">Блог</a>
              </li>

              <li className="header-item">
                <a className="header-link" href="#">Контакты</a>
              </li>
            </ul>
          </nav>

          <div className="header-icons">

            <button className="icon-btn" aria-label="Поиск">
              <Search size={20} />
            </button>

            <button className="icon-btn" aria-label="Избранное">
              <Heart size={20} />
            </button>

            <a href="tel:+998" className="header-phone">
              <Phone size={19} />
              <span>Позвонить</span>
            </a>

          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Открыть меню"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>
    </header>
  )
}

export default Header
