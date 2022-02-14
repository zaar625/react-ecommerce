import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const HeroSlider = props => {
    const data = props.data
  return (
    <div className='hero-slider'>
        {
            data.map((item, index) => (
                <HeroSliderItem key={index} item={item}/>
            ))
        }
        
    </div>
  )
}

HeroSlider.propTypes = {
    data:PropTypes.array.isRequired
}

const HeroSliderItem = props =>(
    <div className='hero-slider__item'>
        <div className='hero-slide__item__info'>
            <div className='hero-slide__item__info__title'>
                <span>{props.item.title}</span>
            </div>
            <div className='hero-slide__item__info__description'>
                <span>{props.item.description}</span>
            </div>
            <div className='hero-slide__item__info__btn'>
                <Link to={props.item.path}>
                    <button>xem chi tiet</button>
                </Link>
            </div>

        </div>
        <div className='hero-slider__item__image'>
            {/* <img src={props.item.img} alt=""/> */}
            {console.log(props.item)}
        </div>
    </div>
)


export default HeroSlider