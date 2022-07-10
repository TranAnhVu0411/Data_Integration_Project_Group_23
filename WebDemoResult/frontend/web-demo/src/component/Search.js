import React, { useEffect, useState, memo } from 'react';
//import "./highchart.js";
import "./search.scss"
import { Box, Grid, Paper, MenuItem, Select, FormControl, TextField, Button, CardMedia } from '@material-ui/core'
import { Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Card from '@material-ui/core/Card';

import { Link } from 'react-router-dom';
import MovieAPI from '../api/MovieAPI';
import { useParams } from 'react-router-dom';
import noImage from '../image/noImg.png'


function Search() {
    let { search } = useParams();
    //request data with search term;

    const [title, setTitle] = useState([])
    const [year, setYear] = useState([])
    //data and request data
    const [productIdList, setProductIdList] = useState([]);
    const [numPages, setNumPages] = useState(0);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);

    //for all data -request once time when component
    const [allCategories, setAllCategories] = useState([]);

    const [showedCategories, setShowedCategories] = useState([]);

    function getData() {
        MovieAPI.getAllMovie({ pages: page }).then((res) => {
            console.log(res.data.data);
            setProductIdList(res.data.data.movie);
            setNumPages(res.data.data.pages);
            setCount(res.data.data.count)
        })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getData();
    }, [page]);

    //for changing Filter



    const handlePageChange = (event, value) => {
        //console.log('Page: ', value);
        setPage(value);
    };

    function submit() {
        console.log(title, year);
        MovieAPI.searchMovie({ title: title, year: year, pages: page}).then((res) => {
            console.log(res.data)
            setProductIdList(res.data.data.movie);
            setNumPages(res.data.data.pages);
            setCount(res.data.data.count)
        })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Box>
            <header className="App-header">
                <div>Movie Data Integration</div>
            </header>
            <Box className="tabSearch" mt={8} mb={8}>
                <Box mb={3} >
                    <Typography className="titleSearch">Search Movie Info</Typography>
                </Box>
                <Box className="searchInfo">

                    <Box className="titleMovie" mr={3}>
                        <TextField id="outlined-basic" label="Title Movie" variant="outlined"
                            placeholder="Nhập tên bộ phim" fullWidth
                            onChange={(e) => setTitle(e.target.value)} />
                    </Box>
                    <Box className="yearMovie">
                        <TextField id="outlined-basic" label="Year Movie" variant="outlined"
                            placeholder="Nhập năm công chiếu" fullWidth
                            onChange={(e) => setYear(e.target.value)} />
                    </Box>
                    <Box ml={2}>
                        <Button variant="contained" color="primary" sx={{ height: "54px" }}
                        onClick={submit}
                        >Search</Button>
                    </Box>
                </Box>
            </Box>
            <Box className="list-movie">
                <Grid container spacing={3} >
                    {productIdList?.map((value, index) => (
                        <Grid item xs={3} key={index}>
                            <Link
                                className="cardContainer"
                                to={
                                    `/movie/movieItem/${value._id}`
                                }
                            >
                                <Card className="cardBody">
                                    {
                                        value.image ?
                                            <div className="productImage" >
                                                <CardMedia
                                                    className="productImage"
                                                    component="img"
                                                    height="60"
                                                    image={value.image}
                                                    alt="ảnh"
                                                />
                                            </div> :
                                            <div>
                                                <img src={noImage} alt="ảnh" />
                                            </div>
                                    }

                                    <div className="cardContent">
                                        <div className="cardHeader">
                                            <p className="cardTitle" style={{ fontWeight: 500 }}>{value.movie_title}</p>
                                        </div>

                                        <div className="productContent">
                                            <div className="productItem" >
                                                <div style={{ minWidth: "50px" }}>Release_date:</div>
                                                <div className="selledNumber">
                                                    {value.release_date}
                                                </div>
                                            </div>
                                            <div className="productRating">
                                                <span className="selledNumber">
                                                    Runtime: {value.runtime}
                                                </span>
                                            </div>
                                            <div className="productRating">
                                                <span className="selledNumber">
                                                    Content Rating: {value.content_rating}
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={4}>
                    {numPages >= 1 && (
                        <Box className="pagination">
                            <Box spacing={2}>
                                <Pagination
                                    count={(count % 20 != 0)? (Math.floor(count / 20)+1):Math.floor(count / 20)}
                                    page={page}
                                    variant="outlined"
                                    shape="rounded"
                                    color="primary"
                                    onChange={handlePageChange}
                                />
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>

        </Box>
    )
}

export default Search;