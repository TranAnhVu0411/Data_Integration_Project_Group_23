const MovieModel = require("../model/MovieModel");
const MetacriticModel = require("../model/Metacritic")
const MovielenModel = require("../model/Movielen")
const TomatoModel = require("../model/RottenTomato")
const TmdbModel = require("../model/TmdbModel")
const httpStatus = require("../utils/httpStatus");

const movieController = {};

movieController.search = async (req, res, next) => {
    try {
        const {
            title,
            year
        } = req.body;
        let titleReq = new RegExp(title, 'i');
        let yearReq = new RegExp(year, 'i');
        // let metacriticRate;
        let movielenRate;
        let tmdbRate;
        // let tomatoRate;
        let result = await MovieModel.findOne({movie_title: titleReq, release_date: yearReq}).limit(10).exec();
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


module.exports = movieController;