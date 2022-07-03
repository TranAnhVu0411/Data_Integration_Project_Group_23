const MovieModel = require("../model/MovieModel");

const httpStatus = require("../utils/httpStatus");

const movieController = {};

movieController.search = async (req, res, next) => {
    try {
        let title = new RegExp(req.body.title, 'i');
        let year = new RegExp(req.body.year, 'i')
        let result = await MovieModel.find({movie_title: title, release_date: year}).limit(10).exec();

        res.status(200).json({
            code: 200,
            message: "Tìm kiếm thành công",
            data: result
        });

    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}


module.exports = movieController;