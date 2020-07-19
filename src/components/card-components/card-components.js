import React from "react";
import DimflixService from "../../service/dimflix-service";
import WithData from "../hoc-helpers";
import AllCards from "./all-cards";
import MovieCards from "./movie-cards";
import TvCards from "./tv-cards";
import PeopleCards from "./people-cards";
const dimflixService = new DimflixService()
const {getSearchAll,getTopRated, getSearchMovies, getTopRatedTv, getSearchTv, getTopRatedPeople,getSearchPeople} =dimflixService



const AllCardsSearch = WithData(AllCards, getTopRated, getSearchAll)
const MovieCardsSearch = WithData(MovieCards, getTopRated, getSearchMovies)
const TvCardsSearch = WithData(TvCards, getTopRatedTv, getSearchTv)
const PeopleCardsSearch = WithData(PeopleCards, getTopRatedPeople, getSearchPeople)

export {
    AllCardsSearch,
    MovieCardsSearch,
    TvCardsSearch,
    PeopleCardsSearch
}