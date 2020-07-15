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


    _transformMovie = async ({backdrop_path,vote_average, title, overview}) => {
        return {
            title,
            poster: backdrop_path,
            vote: vote_average,
            overview
        }
    }
}

