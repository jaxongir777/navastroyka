
import React from 'react'
import './Arcit.css'

const steps = [
    {
        number: '01',
        title: 'Консультация и подбор объекта',
        text: 'Организуем просмотры объектов и помогаем вам оценить их преимущества и недостатки.'
    },
    {
        number: '02',
        title: 'Просмотр и выбор квартиры',
        text: 'Покажем выбранные квартиры, расскажем об их особенностях и поможем определиться с выбором.'
    },
    {
        number: '03',
        title: 'Оформление документов',
        text: 'Подготовим необходимые документы и обеспечим прозрачность каждого этапа сделки.'
    },
    {
        number: '04',
        title: 'Завершение сделки',
        text: 'Поможем завершить покупку и передадим вам ключи от новой квартиры.'
    }
]

const Arcit = () => {
    return (
        <section className='arcit'>
            <div className='container'>
                <div className='arcit-container'>

                    <div className='arcit-heading'>
                        <span className='arcit-subtitle'>
                            INFINITY RESIDENCE
                        </span>

                        <h2 className='arcit-title-name'>
                            Процесс покупки недвижимости
                        </h2>

                        <p className='arcit-heading-text'>
                            Четыре простых шага к вашей новой квартире
                        </p>
                    </div>

                    <ul className='arcit-list'>
                        {steps.map((step) => (
                            <li className='arcit-item' key={step.number}>

                                <span className='arcit-number'>
                                    {step.number}
                                </span>

                                <div className='arcit-line'></div>

                                <h2 className='arcit-title'>
                                    {step.title}
                                </h2>

                                <p className='arcit-text'>
                                    {step.text}
                                </p>

                                <span className='arcit-arrow'>↗</span>

                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default Arcit
