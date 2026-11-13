
import React, { useState } from 'react'
import './Heroder.css'

import Hr from './Hr.png'

const infrastructure = {
    shops: {
        title: 'Инфраструктура района',
        text: 'Наш район предлагает широкий выбор магазинов, чтобы удовлетворить любые потребности. В пешей доступности расположены супермаркеты и продуктовые магазины, где вы всегда найдете свежие продукты и товары повседневного спроса.',
        places: [
            { name: 'Korzinka', time: '5 минут' },
            { name: 'Havas', time: '10 минут' },
            { name: 'FixPrice', time: 'Рядом' },
            { name: 'REDTAG', time: '25 минут' }
        ]
    },
    transport: {
        title: 'Транспортная доступность',
        text: 'Удобное расположение комплекса позволяет быстро добраться до основных районов города. Рядом находятся остановки общественного транспорта и основные транспортные маршруты.',
        places: [
            { name: 'Автобусная остановка', time: '3 минуты' },
            { name: 'Метро', time: '10 минут' },
            { name: 'Такси', time: 'Рядом' },
            { name: 'Главная дорога', time: '5 минут' }
        ]
    },
    schools: {
        title: 'Школы и образование',
        text: 'В районе расположены образовательные учреждения для детей разных возрастов. Школы и учебные центры находятся в удобной доступности от жилого комплекса.',
        places: [
            { name: 'Школа', time: '5 минут' },
            { name: 'Детский сад', time: '7 минут' },
            { name: 'Учебный центр', time: '10 минут' },
            { name: 'Колледж', time: '15 минут' }
        ]
    }
}

const Heroder = () => {
    const [activeTab, setActiveTab] = useState('shops')

    const activeData = infrastructure[activeTab]

    return (
        <section className='heroder'>
            <div className='container'>
                <div className='heroder-container'>

                    <div className='heroder-heading'>
                        <span className='heroder-subtitle'>
                            INFINITY RESIDENCE
                        </span>

                        <h6 className='heroder-main-title'>
                            Инфраструктура района
                        </h6>
                    </div>

                    <div className='heroder-content'>

                        <div className='heroder-image'>
                            <img src={Hr} alt='Инфраструктура района' />
                            <span className='heroder-image-label'>
                                INFINITY
                            </span>
                        </div>

                        <div className='heroder-info'>

                            <div className='heroder-tabs'>
                                <button
                                    className={`heroder-tab ${activeTab === 'shops' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('shops')}
                                >
                                    Магазины
                                </button>

                                <button
                                    className={`heroder-tab ${activeTab === 'transport' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('transport')}
                                >
                                    Транспорт
                                </button>

                                <button
                                    className={`heroder-tab ${activeTab === 'schools' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('schools')}
                                >
                                    Школы
                                </button>
                            </div>

                            <h6 className='heroder-title'>
                                {activeData.title}
                            </h6>

                            <p className='heroder-text'>
                                {activeData.text}
                            </p>

                            <div className='heroder-box'>
                                {activeData.places.map((place, index) => (
                                    <div className='heroder-locs' key={index}>
                                        <h6 className='heroder-title-locs'>
                                            {place.name}
                                        </h6>

                                        <p className='heroder-text-locs'>
                                            {place.time}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Heroder
