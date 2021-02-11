export default class MdbService {
    _apiBase = 'https://api.themoviedb.org/3/movie/';
    _apiBasePopular = 'https://api.themoviedb.org/3/movie/popular?';
    _apiBaseTopRated = 'https://api.themoviedb.org/3/movie/top_rated?';
    _apiBaseUpcoming = 'https://api.themoviedb.org/3/movie/upcoming?';
    _apiBaseBySearch = 'https://api.themoviedb.org/3/search/movie?';
    _apiKey = 'api_key=f24a0fd18f52218851075901c5a108a0';
    _imgBase = 'https://image.tmdb.org/t/p/w500';

    getResource = async(url) => {
        const res = await fetch(url);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    }

    getData = (base, page, query) => async() => {
        const url = this._getQueryUrl(base, page, query);
        const res = await this.getResource(url);
        return res.results.map(this._transformMovie);
    }

    getPages = async (apiBase, query) => {
        const data = await this.getResource(
            this._getQueryUrl(this._apiBaseBySearch,1, query));
        return data.total_pages
    }

    getTotalPages = async () => {
        const popular = await this.getResource(
            this._getQueryUrl(this._apiBasePopular, 1));
        const topRated = await this.getResource(
            this._getQueryUrl(this._apiBaseTopRated, 1));
        const upcoming = await this.getResource(
            this._getQueryUrl(this._apiBaseUpcoming, 1));
        return {
            popular: popular.total_pages,
            topRated: topRated.total_pages,
            upcoming: upcoming.total_pages
        }
    }

    getSearchTotalPages = async (query) => {
        const data = await this.getResource(
            this._getQueryUrl(this._apiBaseBySearch,1, query));
        return data.total_pages
    }

    getPopular = async(page) => {
        return this.getData(this._apiBasePopular, page)();
    }

    getTopRated = async(page) => {
        return this.getData(this._apiBaseTopRated, page)();
    }

    getUpcoming = async(page) => {
        return this.getData(this._apiBaseUpcoming, page)();
    }

    getBySearch = (page, query) => {
        return this.getData(this._apiBaseBySearch, page, query)();
    }

    getMovieDetails = async(id) => {
        const url = `${this._apiBase}${id}?${this._apiKey}`;
        const res = await this.getResource(url);
        return this._transformMovieDetails(res);
    }

    _getQueryUrl = (base, page, query) => {
        const url = `${base}${this._apiKey}&page=${page}`;
        return !query ? url : `${url}&query=${query}`;
    }

    _transformMovie = (movie) => {
        const {id, title, vote_average, poster_path, release_date} = movie;
        return {
            id,
            title,
            rating: vote_average,
            poster: this._transformPoster(poster_path),
            release: this._checkData(release_date)
        }
    }

    _transformMovieDetails = (movie) => {
        const {id, title, tagline, revenue, budget, runtime, overview,
            vote_average, genres, release_date, production_countries, poster_path} = movie;
        return {
            id,
            title,
            tagline,
            revenue,
            budget,
            runtime,
            overview,
            rating: vote_average,
            genres: this._transformPropToString(genres).toLowerCase(),
            year: release_date.substring(0, 4),
            productionCountries: this._transformPropToString(production_countries),
            poster: this._transformPoster(poster_path)
        }

    }

    _transformPoster = (poster) => {
        return poster ? this._imgBase + poster : poster;
    }

    _checkData = (data) => {
        if(!data) {
            return 'unknown'
        }
        return this._transformDate(data);
    }

    _transformDate = (date) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        date = date.split('-').reverse();
        date[1] = months[date[1] - 1]
        return date.join(' ');
    }

    _transformPropToString = (arr) => {
        return arr.map(({name}) => name).join(', ');
    }
}
