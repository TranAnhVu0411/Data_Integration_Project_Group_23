const MovieModel = require("../model/MovieModel");
const MetacriticModel = require("../model/Metacritic")
const MovielenModel = require("../model/Movielen")
const TomatoModel = require("../model/RottenTomato")
const TmdbModel = require("../model/TmdbModel")
const httpStatus = require("../utils/httpStatus");

const movieController = {};

movieController.getMovieInfo = async (req, res, next) => {
    try {

        let movieId = req.params.movieId;
        // let metacriticRate;
        let movielenRate;
        let tmdbRate;
        // let tomatoRate;

        let result = await MovieModel.findById(movieId);
        let metacriticRate = await MetacriticModel.find({movie_id: result.movie_id});
        movielenRate = await MovielenModel.find({movie_id: result.movie_id});
        tmdbRate = await TmdbModel.find({movie_id: result.movie_id});
        let tomatoRate = await TomatoModel.find({movie_id: result.movie_id})

        res.status(200).json({
            code: 200,
            message: "Tìm kiếm thành công",
            data: {
                movie: result,
                metacriticRate: metacriticRate,
                movielenRate: movielenRate,
                tmdbRate: tmdbRate,
                tomatoRate: tomatoRate
            }
        });

    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}
movieController.getList = async (req, res, next) => {
    try {
        const {
            pages
        } = req.body;

        let result = await MovieModel.find({})
        .skip(pages > 0 ? ( ( pages - 1 ) * 20) : 0).limit(20);
        let count = await MovieModel.find({}).count();

        res.status(200).json({
            code: 200,
            message: "Get list thành công",
            data: {
                movie: result,
                pages: pages,
                count: count
            }
        });

    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

movieController.searchMovie = async (req, res, next) => {
    try {
        const {
            title,
            year,
            pages
        } = req.body;
        let titleReq = new RegExp(title, 'i');

        let result = await MovieModel.find({movie_title: titleReq, release_date: year}).skip(pages > 0 ? ( ( pages - 1 ) * 20) : 0).limit(20);
        let count = await MovieModel.find({movie_title: titleReq, release_date: year}).count();
        res.status(200).json({
            code: 200,
            message: "Tìm kiếm thành công",
            data: {
                movie: result,
                count: count,
                pages: pages
            }
        });

    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

module.exports = movieController;