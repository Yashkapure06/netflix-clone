import React from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Slider from '../components/Slider';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Slider
                mediaType="tv"
                title="NETFLIX ORIGINALS"
                path="/discover/tv"
                params={{ with_networks: 213 }}
                isLarge
            />
            <Slider
                title="TRENDING NOW"
                path="/trending/all/week"
            />
            <Slider
                mediaType="movie"
                title="TOP RATED"
                path="/movie/top_rated"
            />
            <Slider
                mediaType="movie"
                title="ACTION MOVIES"
                path="/discover/movie"
                params={{ with_genres: 28 }}
            />


        </div>
    );
}

export default HomePage;
