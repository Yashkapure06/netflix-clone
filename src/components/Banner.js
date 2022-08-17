import React, { useState, useEffect } from 'react';


import tmdbApi from '../api/TMDB';
import { generateImageUrl, ImageSizes } from '../utils/tmdb';

const Banner = () => {

    const [ movie, setMovie ] = useState({});

    useEffect(()=>{
        const fetchBannerMovie = async () => {
            const json = await  tmdbApi.get("/discover/tv", { with_networks: 213 })
            setMovie(
                json.results[
                    Math.floor(Math.random() * json.results.length - 1)  // -1 because we don't want the last index
                ]
            )
        }
        fetchBannerMovie();
    },[])


    return (
        <div
            className="banner"
            style={{
                backgroundImage: `url(${generateImageUrl(movie?.backdrop_path || '', ImageSizes.backdrop)})`,
            }}
            >
            <div className="banner__contents">
                <h1 className="banner__title">
                {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                {movie?.overview}
                </h1>
            </div>
            <div className="banner__cover" />
        </div>
    );
}

export default Banner;
