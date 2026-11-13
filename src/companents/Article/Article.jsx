
import React from 'react'
import './Article.css'

import Ar1 from './Ar1.png'
import Ar2 from './Ar2.png'
import Ar3 from './Ar3.png'
import Ar4 from './Ar4.png'

const images = [Ar1, Ar2, Ar3, Ar4]

const Article = () => {
  return (
    <article className='article'>
      <div className='container'>
        <div className='article-container'>

          <div className='article-heading'>
            <span className='article-subtitle'>INFINITY RESIDENCE</span>
            <h3 className='article-title-name'>
              Фотогалерея и видеотуры
            </h3>
          </div>

          <div className='article-gallery'>
            <div className='article-track'>
              {[...images, ...images].map((image, index) => (
                <div className='article-card' key={index}>
                  <img src={image} alt={`Infinity gallery ${index + 1}`} />
                  <div className='article-overlay'>
                    <span>INFINITY</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className='article-btn'>
            Посмотреть всё
            <span>↗</span>
          </button>

        </div>
      </div>
    </article>
  )
}

export default Article
