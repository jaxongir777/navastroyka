
import React from 'react'
import './Register.css'

import R from './R.png'

const Register = () => {
  return (
    <section className='register'>
      <div className='container'>
        <div className='register-container'>

          <div className='register-content'>
            <span className='register-subtitle'>INFINITY RESIDENCE</span>

            <h2 className='register-title'>
              Оставьте заявку
            </h2>

            <p className='register-text'>
              Заполните форму, и наш специалист свяжется
              с вами в ближайшее время.
            </p>

            <form className='register-form'>
              <input
                type='text'
                placeholder='Ф.И.О'
                required
              />

              <input
                type='tel'
                placeholder='Номер телефона'
                required
              />

              <input
                type='email'
                placeholder='Электронная почта'
                required
              />

              <textarea
                placeholder='Ваш вопрос'
                rows='4'
              ></textarea>

              <button type='submit' className='register-btn'>
                Отправить заявку ↗
              </button>
            </form>
          </div>

          <div className='register-image'>
            <img src={R} alt='Infinity Residence' />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Register
