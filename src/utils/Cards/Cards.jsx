import React from 'react';
import './cards.css';
import Arrow from '../../assets/arrow1.png'

const Cards = ({ title, img, description, link }) => {
    const styles = {
        backgroundImage : `url(${img})`
    }

    return (
        <div className='card-container' style={styles}>
            <div className='card-link'>
                <a href={link}><img className='card-link-img' src={Arrow} alt="arrow" /></a>
            </div>
            <div className='card-intro'>
                <h1 className='card-title'>{title}</h1>
                <p className='card-description'>{description}</p>
            </div>
        </div>
    )
}

export default Cards