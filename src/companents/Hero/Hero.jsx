import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <section className='hero'>
              <div className='container'>
                  <div className='hero-container'>
                      <ul className='hero-list'>
                         <li className='hero-item'>
                            <h1 className='hero-title'>Infinity</h1>
                            <p className='hero-text'>от $500 000</p>
                            <div className='hero-btns'>
                                <button className='hero-btn1'>Оставить заявку</button>
                                <button className='hero-btn2'>Позвонить</button>
                            </div>
                         </li>
                      </ul>
                  </div>
              </div>
      </section>
    </>
  )
}

export default Hero