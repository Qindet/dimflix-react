export default class DimflixService {

    _apiBase = `https://api.themoviedb.org`

    getResources = async (url) => {
        const res = await fetch(`${this._apiBase}${url}api_key=0442fc3531842a22b74c6969e9941edc&language=en-US&page=1`)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

       return await res.json()
    }

    getRandomMovie = async (id) => {
        const res =  await this.getResources(`/3/movie/${id}?`)

        return this._transformMovie(res)
    }

    getTrending = async () => {
        const res = await this.getResources(`/3/trending/all/week?`)
        console.log(res)
        return res.results.map(this._transformTrending)
    }

    getTopRated = async () => {
        const res = await this.getResources(`/3/movie/top_rated?`)

        return res.results.map(this._transformTopRated)
    }

    getSearchAll = async (keyword) => {
        const res = await this.getResources(`/3/search/multi?query=${keyword}&`)
        return res.results.map(this._transformMultiSearch)
    }

    // getByID = async (id) => {
    //     const res = await fetch(`${this._apiBase}/3/find/${id}?api_key=0442fc3531842a22b74c6969e9941edc&language=en-US&external_source=imdb_id`)
    //     const resul = await res.json()
    //     return resul.movie_results[0] || resul.person_results[0] || resul.tv_episode_results[0] || resul.tv_results[0] || resul.tv_season_results[0]
    // }

    _transformMovie =  ({popularity,backdrop_path, vote_average, title, overview, release_date, media_type}) => {
        let img
        if (backdrop_path === null) {
         img =  'https://image.winudf.com/v2/image/Y29tLlBSSVNTSS5XYWxscGFwZXIuQmxhY2suQmxhY2tCYWNrZ3JvdW5kV2FsbHBhcGVySERfc2NyZWVuXzBfMTUyOTQ1MzU1Nl8wMjM/screen-0.jpg?fakeurl=1&type=.jpg'
        } else {
            img = `https://image.tmdb.org/t/p/w500${backdrop_path}`
        }

        return {
            title,
            popularity,
            poster: img,
            vote: vote_average,
            overview,
            date:release_date,
            backdrop_img: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
            media_type
        }
    }

    _transformTrending =  ({id,popularity,original_title,name, poster_path,backdrop_path, overview, vote_average,release_date, media_type}) => {
        if (!original_title) {
            original_title= name
        }
        return {
            id,
            popularity,
            title: original_title,
            overview,
            vote: vote_average,
            poster: `https://image.tmdb.org/t/p/w500${poster_path}`,
            date:release_date,
            backdrop_img: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
            media_type
        }
    }

    _transformTopRated = ({id,popularity,original_title, poster_path,backdrop_path,overview,vote_average,release_date, media_type}) => {

        return {
            id,
            title:original_title,
            poster: `https://image.tmdb.org/t/p/w500/${poster_path}`,
            vote:vote_average,
            date:release_date,
            overview,
            popularity,
            backdrop_img: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
            media_type
        }
    }

    _transformMultiSearch = (props) => {
        let link = props.poster_path === undefined ? `https://image.tmdb.org/t/p/w500/${props.profile_path}` :
            `https://image.tmdb.org/t/p/w500/${props.poster_path}`
        if (!(props.poster_path || props.profile_path)) {
            link = `https://vsetattoo.com.ua/wp-content/themes/TattooKarma/assets/imagenotfound.svg`
        }
        let title = props.title === undefined ? props.name : props.title
        return {
            id: props.id,
            poster: link,
            popularity: props.popularity,
            vote: props.vote_average,
            title,
            date: props.release_date,
            backdrop_img: `https://image.tmdb.org/t/p/w500${props.backdrop_path}`,
            media_type: props.media_type
        }
    }
}

