import React from 'react';
import './AnimeCard.scss';
const AnimeCard = (props: any) => {
    const {
        description,
        img,
    } = props;
    return (
        <div className='cardContainer'>
            <img
                className='p-2 h-32 w-60 object-cover'
                src={img}
                alt=""
            />
            <p
                dangerouslySetInnerHTML={{ __html: description }}
                className='cardDescription'
            />
        </div>
    )
}

export default AnimeCard;