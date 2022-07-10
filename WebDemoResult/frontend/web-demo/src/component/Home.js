import React, { useEffect, useState, useRef, memo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
//import "./highchart.js";
import "./home.scss"
import { Box, Grid, Paper, MenuItem, Select, FormControl, TextField, Button, CardMedia } from '@material-ui/core'
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MovieAPI from '../api/MovieAPI';
import noImage from '../image/noImg.png'

export default function Home() {

    let { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState();
    const [metacritic, setMetacritic] = useState([]);
    const [movielen, setMovielen] = useState([]);
    const [tmdb, setTmdb] = useState([]);
    const [tomato, setTomato] = useState([]);
    const [images, setImages] = useState('');
    const [movieReview, setMovieReview] = useState([]);
    const [tomatoReview, setTomatoReview] = useState([]);

    function getData() {
        console.log(movieId);
        MovieAPI.getMovieInfo(movieId).then((res) => {
            let movieListRes = res.data;
            // console.log(res.data.data);
            setMovieInfo(movieListRes.data);
            setMetacritic(movieListRes.data.metacriticRate);
            setMovielen(movieListRes.data.movielenRate);
            setTmdb(movieListRes.data.tmdbRate);
            setTomato(movieListRes.data.tomatoRate);
            setMovieReview(movieListRes.data.review);
            setTomatoReview(movieListRes.data.tomato_review)
        })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <Box>
            <div className="App">
                <header className="App-header">
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                        <div>Movie Data Integration</div>
                    </Link>

                </header>
                <Box className="bodyInfo" mt={8}>
                    {/* <Box mb={3} >
                        <Typography className="titleSearch">Search Movie Info</Typography>
                    </Box> */}
                    {/* <Box className="searchInfo">

                        <Box className="titleMovie" mr={3}>
                            <TextField id="outlined-basic" label="Title Movie" variant="outlined"
                                placeholder="Nhập tên bộ phim" fullWidth
                                onChange={(e) => setTitleSearch(e.target.value)} />
                        </Box>
                        <Box className="yearMovie">
                            <TextField id="outlined-basic" label="Year Movie" variant="outlined"
                                placeholder="Nhập năm công chiếu" fullWidth
                                onChange={(e) => setYearSearch(e.target.value)} />
                        </Box>
                        <Box ml={2}>
                            <Button variant="contained" color="primary" sx={{ height: "54px" }}
                                onClick={submit}>Search</Button>
                        </Box>
                    </Box> */}
                    <Box mt={4}>
                        <Box className="info-movie">
                            <Box className="image">
                                {
                                    movieInfo?.movie.image ?
                                        <CardMedia
                                            className="productImage"
                                            component="img"
                                            // height="60"
                                            image={movieInfo?.movie.image}
                                            alt="ảnh"
                                        /> :
                                        <div>
                                            <img src={noImage} alt="ảnh" />
                                        </div>
                                }


                                {/* <img src={movieInfo?.movie.image} alt="Ảnh" /> */}
                            </Box>
                            <Box className="movieInfo" ml={10}>
                                <Box sx={{ display: "flex" }} mb={2}>
                                    <Box sx={{ fontWeight: "700", fontSize: "16px", minWidth: "160px" }}>Movie title:</Box>
                                    <Box>{movieInfo?.movie.movie_title}</Box>
                                </Box>
                                <Box sx={{ display: "flex" }} mb={2}>
                                    <Box sx={{ fontWeight: "700", fontSize: "16px", minWidth: "160px" }}>Category:</Box>
                                    <Box>{movieInfo?.movie.genres}</Box>
                                </Box>
                                <Box sx={{ display: "flex" }} mb={2}>
                                    <Box sx={{ fontWeight: "700", fontSize: "16px", minWidth: "160px" }}>Release Date:</Box>
                                    <Box>{movieInfo?.movie.release_date}</Box>
                                </Box>
                                <Box sx={{ display: "flex" }} mb={2}>
                                    <Box sx={{ fontWeight: "700", fontSize: "16px", minWidth: "160px" }}>Runtime:</Box>
                                    <Box>{movieInfo?.movie.runtime}</Box>
                                </Box>
                                <Box sx={{ display: "flex" }} mb={2}>
                                    <Box sx={{ fontWeight: "700", fontSize: "16px", minWidth: "160px" }}>Content Rating:</Box>
                                    <Box>{movieInfo?.movie.content_rating}</Box>
                                </Box>
                                <Box sx={{ display: "flex" }} mb={2}>
                                    <Box sx={{ fontWeight: "700", fontSize: "16px", minWidth: "160px" }}>Director:</Box>
                                    <Box>{movieInfo?.movie.directors}</Box>
                                </Box>
                                <Box sx={{ display: "flex" }}>
                                    <Box sx={{ fontWeight: "700", fontSize: "16px", minWidth: "160px" }}>Actor:</Box>
                                    <Box>{movieInfo?.movie.actors}</Box>
                                </Box>

                            </Box>
                        </Box>
                        <Box className="rating-movie" mt={3}>
                            <Box mb={3} sx={{ fontSize: '18px', fontWeight: "650" }}>Rating</Box>
                            <TableContainer component={Paper}>
                                <Table className="tableRating" aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="right">Rotten Tomatoes <br /> Audience Rating</TableCell>
                                            <TableCell align="right">Rotten Tomatoes <br /> Tomatometer Rating</TableCell>
                                            <TableCell align="right">TMDB Rating</TableCell>
                                            <TableCell align="right">Metacritic Rating</TableCell>
                                            <TableCell align="right">Movielen Rating</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {/* {rows.map((row) => ( */}
                                        <TableRow key={movieInfo?.movie._id}>
                                            <TableCell component="th" scope="row" align="right">
                                                {tomato.length > 0 ? tomato[0].audience_rating : null}
                                            </TableCell>
                                            <TableCell align="right">{tomato.length > 0 ? tomato[0].tomatometer_rating : null}</TableCell>
                                            <TableCell align="right">{tmdb.length > 0 ? tmdb[0].avgrate : null}</TableCell>
                                            <TableCell align="right">{metacritic.length > 0 ? metacritic[0].avgrating : null}</TableCell>
                                            <TableCell align="right">{movielen.length > 0 ? Number(movielen[0].avgrating).toFixed(2) : null}</TableCell>
                                        </TableRow>
                                        {/* ))} */}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                        <Box className="review" mt={4}>
                            <Box sx={{ fontSize: '18px', fontWeight: "650" }} mb={4}>Review</Box>
                            {
                                (movieReview.length > 0) ? (movieReview.map((item) => {
                                    return (
                                        <Box mt={2} sx={{ display: "flex" }}>
                                            <Box className="avata" sx={{ minWidth: "8%", maxWidth: "8%" }}>
                                                <Avatar sx={{ margin: "auto" }} />
                                            </Box>
                                            <Box>
                                                <Box className="nameRivewer" sx={{fontWeight: "500"}}>{item.critic_name}</Box>
                                                <Box className="conten-review">{item.review_content}</Box>
                                            </Box>
                                        </Box>
                                    )
                                })) : null
                            }
                            {
                                (tomatoReview.length > 0) ? (tomatoReview.map((item) => {
                                    return (
                                        <Box mt={2} sx={{ display: "flex" }}>
                                            <Box className="avata" sx={{ minWidth: "8%", maxWidth: "8%" }}>
                                                <Avatar sx={{ margin: "auto" }} />
                                            </Box>
                                            <Box>
                                                <Box className="nameRivewer" sx={{fontWeight: "500"}}>{item.publisher_name}</Box>
                                                <Box className="conten-review">{item.review_content}</Box>
                                            </Box>
                                        </Box>
                                    )
                                })) : null
                            }
                        </Box>
                    </Box>
                </Box>
            </div>
        </Box>
    )
}