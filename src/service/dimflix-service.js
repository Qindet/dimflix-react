export default class DimflixService {

    _apiBase = `https://api.themoviedb.org`

    getResources = async (url) => {
        const res = await fetch(`${this._apiBase}${url}api_key=0442fc3531842a22b74c6969e9941edc&language=en-US`)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}`+ `received ${res.status}`)
        }

       return await res.json()
    }

    getRandomMovie = async (id) => {
        const res =  await this.getResources(`/3/movie/${id}?`)
        return this._transformMovie(res)
    }

    getTrending = async () => {
        const res = await this.getResources(`/3/trending/all/week?`)
        return res.results.map(this._transformTrending)
    }

    getTopRated = async () => {
        const res = await this.getResources(`/3/movie/top_rated?`)
        console.log(res.results)
        return res.results.map(this._transformTopRated)
    }

    _transformMovie =  ({backdrop_path,vote_average, title, overview}) => {
        return {
            title,
            poster: backdrop_path,
            vote: vote_average,
            overview
        }
    }

    _transformTrending =  ({id,title, poster_path}) => {
        return {
            id,
            title,
            poster: `https://image.tmdb.org/t/p/w500/${poster_path}`
        }
    }

    _transformTopRated = ({id,original_title, poster_path,popularity,vote_average,release_date}) => {
        return {
            id,
            title:original_title,
            poster: `https://image.tmdb.org/t/p/w500/${poster_path}`,
            popularity,
            vote:vote_average,
            date:release_date
        }
    }
}

