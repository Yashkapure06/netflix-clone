import React, { useState } from 'react';
import classNames from 'classnames';


import { generateImageUrl, ImageSizes } from "../utils/tmdb";
import TrailerModal from './TrailerModal';


const Cards = ({ media, mediaType, isLarge }) => {

    const [ isTrailerOpen, setTrailerOpen ] = useState(false);

    return (
        <>
            <div
                key={media.id}
                className="media-card"
                onClick={() => setTrailerOpen(true)}
            >
                <img
                className={classNames(
                    'media-card__poster',
                    { 'media-card__poster--large': isLarge },
                )}
                src={
                    isLarge
                    ? generateImageUrl(media.poster_path, ImageSizes.poster)
                    : generateImageUrl(media.backdrop_path, ImageSizes.card)
                }
                alt={media.original_title}
                />
                <div className="media-card__cover">
                    <div className="media-card__name">
                        {media.title || media.name || media.original_name}
                    </div>
                    <div className="media-card__description">
                        {media.overview}
                    </div>
                </div>
            </div>
            {isTrailerOpen && (
                <TrailerModal
                    mediaType={mediaType}
                    mediaId={media.id}
                    media={media}
                    onClose={() => setTrailerOpen(false)}
                />
            )}
        </>
    );
}

export default Cards;
