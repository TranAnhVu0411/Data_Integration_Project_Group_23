import callAPI from "./CallAPI";

function MovieAPI() {

    // [GET] - show
    this.getMovieInfo = (movieId) => {
        return callAPI.post(`movie/movieItem/${movieId}`);
    }
    // [GET] - getAll
    this.getAllMovie = (data) => {
        return callAPI.post(`movie/getList`, data);
    }

    this.searchMovie = (data) => {
        return callAPI.post(`movie/searchMovie`, data);
    }

}

export default new MovieAPI()