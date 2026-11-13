
import React from 'react'
import './Sect.css'

import St from './St.png'

const projects = [
  { name: 'Harizma', price: 'от $700 000', value: '700000' },
  { name: 'Harizma', price: 'от $700 000', value: '700000' },
  { name: 'Harizma', price: 'от $700 000', value: '700000' },
]

const Sect = () => {
  return (
    <section className='sect'>
      <div className='container'>
        <div className='sect-container'>

          <div className='sect-heading'>
            <span className='sect-subtitle'>НАШИ ПРОЕКТЫ</span>
            <h3 className='sect-title-name'>Другие ЖК</h3>
          </div>

          <ul className='sect-list'>
            {projects.map((item, index) => (
              <li className='sect-item' key={index}>
                <img src={St} alt={item.name} />

                <div className='sect-overlay'></div>

                <div className='sect-box'>
                  <div>
                    <h3 className='sect-title'>{item.name}</h3>
                    <data value={item.value}>{item.price}</data>
                  </div>

                  <span className='sect-arrow'>↗</span>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>

  )
}

export default Sect
