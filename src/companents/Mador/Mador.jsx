
import React from 'react'
import './Mador.css'

const reviews = [
    {
        name: 'Иванов Иван Иванович',
        text: 'Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!'
    },
    {
        name: 'Петров Александр Сергеевич',
        text: 'Очень понравился жилой комплекс Infinity. Современная архитектура, удобная планировка квартир и благоустроенная территория. Отдельно хочется отметить тишину и комфорт внутри комплекса. Отличное место для жизни!'
    },
    {
        name: 'Смирнова Анна Викторовна',
        text: 'Выбрали Infinity для нашей семьи и ни разу не пожалели. Просторные квартиры, приятная атмосфера и удобное расположение. Рядом есть всё необходимое для комфортной жизни. Спасибо за качество и внимание к деталям!'
    },
    {
        name: 'Каримов Бекзод Рустамович',
        text: 'Прекрасный жилой комплекс с современным дизайном. Очень нравится закрытая территория, безопасность и зоны отдыха. Всё продумано для комфортного проживания. Рекомендую!'
    }
]

const Mador = () => {
    const cards = [...reviews, ...reviews]

    return (
        <section className='mador'>
            <div className='container'>
                <div className='mador-container'>

                    <div className='mador-heading'>
                        <span className='mador-subtitle'>
                            INFINITY RESIDENCE
                        </span>

                        <h2 className='mador-heading-title'>
                            Отзывы наших клиентов
                        </h2>

                        <p className='mador-heading-text'>
                            Мнение наших жителей — лучшая оценка нашей работы
                        </p>
                    </div>

                    <div className='mador-gallery'>
                        <div className='mador-track'>
                            {cards.map((review, index) => (
                                <div className='mador-card' key={index}>

                                    <div className='mador-card-top'>
                                        <div className='mador-avatar'>
                                            {review.name.charAt(0)}
                                        </div>

                                        <div>
                                            <h3 className='mador-title'>
                                                {review.name}
                                            </h3>

                                            <span className='mador-label'>
                                                Житель ЖК Infinity
                                            </span>
                                        </div>
                                    </div>

                                    <div className='mador-stars'>
                                        ★★★★★
                                    </div>

                                    <p className='mador-text'>
                                        {review.text}
                                    </p>

                                    <span className='mador-quote'>“</span>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Mador
