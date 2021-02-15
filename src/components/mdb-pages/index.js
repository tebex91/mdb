import React from 'react';

import MainPage from './main-page/main-page';
import FilmList from '../film-list';
import SelectedPage from './selected-page/selected-page';

const PopularPage = () => <FilmList func='getPopular' />;
const TopRatedPage = () => <FilmList func='getTopRated' />;
const UpcomingPage = () => <FilmList func='getUpcoming' />;
const SearchPage = ({searchQuery}) => <FilmList func='getBySearch' searchQuery={searchQuery} />

export {
    MainPage,
    PopularPage,
    TopRatedPage,
    UpcomingPage,
    SearchPage,
    SelectedPage
}