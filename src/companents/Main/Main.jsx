import React from 'react'
import './Main.css'
import MAin from './Main.png'


const Main = () => {
    return (
        <>
            <main className='main'>
                <div className='container'>
                    <div className='main-container'>
                        <div className='main-box'>
                            <ul className='main-list-box'>
                                <li className='main-item-box'><a className='main-link-box' href="#">О комплексе</a></li>
                                <li className='main-item-box'><a className='main-link-box' href="#">Галерея</a></li>
                                <li className='main-item-box'><a className='main-link-box' href="#">Планировки</a></li>
                                <li className='main-item-box'><a className='main-link-box' href="#">Условия покупки</a></li>
                                <li className='main-item-box'><a className='main-link-box' href="#">Инфраструктура</a></li>
                                <li className='main-item-box'><a className='main-link-box' href="#">Отзывы</a></li>
                            </ul>
                        </div>
                        <ul className='main-list'>
                            <li className='main-item'>
                                <h2 className='main-title'>Infinity Клубный дом</h2>
                                <button className='main-btn'>Позвонить</button>
                            </li>
                            <li className='main-item-text'>
                                <p className='main-text'>Дом имеет свой приватный, закрытый двор, с несколькими зонами отдыха для взрослых и детей. Отдельно предусмотрено помещение для консьержа и охраны. Из окон квартир открывается вид на эксклюзивный ландшафтный двор-парк общей площадью более 1 Га, с прогулочными аллеями, водными объектами и летним кинотеатром.</p>
                            </li>
                        </ul>
                        <img src={MAin} alt="" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main