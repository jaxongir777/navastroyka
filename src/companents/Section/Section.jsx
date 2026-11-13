
import React from 'react'
import './Section.css'

import Sc1 from './sc1.png'
import Sc2 from './sc2.png'
import Sc3 from './sc3.png'
import Sc4 from './sc4.png'

const apartments = [
    { image: Sc1, floor: 4, house: 8, entrance: 8, rooms: 3, price: 600000 },
    { image: Sc2, floor: 5, house: 8, entrance: 8, rooms: 2, price: 450000 },
    { image: Sc3, floor: 6, house: 7, entrance: 7, rooms: 3, price: 550000 },
    { image: Sc4, floor: 4, house: 6, entrance: 6, rooms: 4, price: 700000 },
]

const Section = () => {
    const cards = [...apartments, ...apartments]

    return (
        <section className='section'>
            <div className='container'>
                <div className='section-container'>

                    <div className='section-heading'>
                        <span className='section-subtitle'>
                            INFINITY RESIDENCE
                        </span>

                        <h4 className='section-title-name'>
                            Планировки и доступные квартиры
                        </h4>
                    </div>

                    <div className='section-gallery'>
                        <div className='section-track'>
                            {cards.map((item, index) => (
                                <div className='section-card' key={index}>
                                    <div className='section-item'>

                                        <div className='section-image'>
                                            <img
                                                src={item.image}
                                                alt='Планировка квартиры'
                                            />

                                            <button className='section-book-btn'>
                                                Забронировать
                                            </button>

                                            <span className='section-badge'>
                                                INFINITY
                                            </span>
                                        </div>

                                        <div className='section-info'>
                                            <h4 className='section-title'>
                                                {item.rooms}-комнатная квартира
                                            </h4>

                                            <div className='section-details'>
                                                <p className='section-text'>
                                                    <span>Этаж</span>
                                                    <strong>{item.floor}</strong>
                                                </p>

                                                <p className='section-text'>
                                                    <span>Дом</span>
                                                    <strong>{item.house}</strong>
                                                </p>

                                                <p className='section-text'>
                                                    <span>Подъезд</span>
                                                    <strong>{item.entrance}</strong>
                                                </p>

                                                <p className='section-text'>
                                                    <span>Комнат</span>
                                                    <strong>{item.rooms}</strong>
                                                </p>
                                            </div>

                                            <hr />

                                            <div className='section-bottom'>
                                                <data value={item.price}>
                                                    ${item.price.toLocaleString('en-US')}
                                                </data>

                                                <button className='section-btn'>
                                                    Подробнее ↗
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className='section-load-btn'>
                        Загрузить все
                    </button>

                </div>
            </div>
        </section>
    )
}

export default Section
