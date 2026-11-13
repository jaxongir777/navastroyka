
import React from 'react'
import './Wrapper.css'

const conditions = [
    {
        number: '01',
        title: 'Требуемые документы',
        text: [
            'Физ. лицам: паспорт, ИНН',
            'Юр. лицам: учредительные документы, доверенность'
        ]
    },
    {
        number: '02',
        title: 'Выбор недвижимости',
        text: [
            'Подбор подходящей квартиры',
            'Ознакомление с планировками и условиями'
        ]
    },
    {
        number: '03',
        title: 'Оформление договора',
        text: [
            'Подготовка договора купли-продажи',
            'Проверка всех необходимых документов'
        ]
    },
    {
        number: '04',
        title: 'Способы оплаты',
        text: [
            'Наличный и безналичный расчёт',
            'Индивидуальные условия оплаты'
        ]
    },
    {
        number: '05',
        title: 'Получение недвижимости',
        text: [
            'Завершение оформления сделки',
            'Передача ключей новому владельцу'
        ]
    }
]

const Wrapper = () => {
    return (
        <section className='wrapper'>
            <div className='container'>
                <div className='wrapper-container'>

                    <div className='wrapper-heading'>
                        <span className='wrapper-subtitle'>
                            INFINITY RESIDENCE
                        </span>

                        <h5 className='wrapper-title-name'>
                            Условия покупки
                        </h5>

                        <p className='wrapper-intro'>
                            Процесс покупки недвижимости в нашем агентстве
                            разработан таким образом, чтобы обеспечить
                            максимальное удобство и прозрачность для наших клиентов.
                        </p>
                    </div>

                    <div className='wrapper-box'>
                        {conditions.map((item) => (
                            <div className='wrapper-row' key={item.number}>

                                <div className='wrapper-number'>
                                    {item.number}
                                </div>

                                <div className='wrapper-content'>
                                    <h5 className='wrapper-title'>
                                        {item.title}
                                    </h5>

                                    <div className='wrapper-description'>
                                        {item.text.map((text, index) => (
                                            <p className='wrapper-text' key={index}>
                                                {text}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <span className='wrapper-arrow'>↗</span>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Wrapper
