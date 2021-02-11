import React from 'react';
import FilmList from '../film-list';

const PopularPage = () => <FilmList func='getPopular' />;
const TopRatedPage = () => <FilmList func='getTopRated' />;
const UpcomingPage = () => <FilmList func='getUpcoming' />;
const SearchPage = ({searchQuery}) => <FilmList func='getBySearch' searchQuery={searchQuery} />

export {
    PopularPage,
    TopRatedPage,
    UpcomingPage,
    SearchPage
}