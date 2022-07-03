import React from 'react'
//import "./highchart.js";
import "./home.scss"
import { Box, Grid, Paper, MenuItem, Select, FormControl, TextField, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function Home() {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      ];
    return (
        <Box>
            <div className="App">
                <header className="App-header">
                    <div>Movie Data Integration</div>
                </header>
                <Box className="bodyInfo" mt={8}>
                    <Box mb={3} >
                        <Typography className="titleSearch">Search Movie Info</Typography>
                    </Box>
                    <Box className="searchInfo">

                        <Box className="titleMovie" mr={3}>
                            <TextField id="outlined-basic" label="Title Movie" variant="outlined"
                                placeholder="Nhập tên bộ phim" fullWidth />
                        </Box>
                        <Box className="yearMovie">
                            <TextField id="outlined-basic" label="Year Movie" variant="outlined"
                                placeholder="Nhập năm công chiếu" fullWidth />
                        </Box>
                        <Box ml={2}>
                            <Button variant="contained" color="primary" sx={{height: "54px"}}>Search</Button>
                        </Box>
                    </Box>
                    <Box mt={4}>
                        <Box className="info-movie">
                            <Box className="image">Ảnh</Box>
                            <Box className="movieInfo" ml={10}>
                                <Box sx={{ display: "flex" }} mb={2}>
                                    <Box sx={{ fontWeight: "700", fontSize: "16px", width: "160px" }}>Movie title:</Box>
                                    <Box>Thương em nhiều lắm</Box>
                                </Box>
                                <Box sx={{ display: "flex" }} mb={2}>
                                    <Box sx={{ fontWeight: "700", fontSize: "16px", width: "160px" }}>Category:</Box>
                                    <Box>Action</Box>
                                </Box>
                                <Box sx={{ display: "flex" }} mb={2}>
                                    <Box sx={{ fontWeight: "700", fontSize: "16px", width: "160px" }}>Release Date:</Box>
                                    <Box>1/1/2022</Box>
                                </Box>
                                <Box sx={{ display: "flex" }} mb={2}>
                                    <Box sx={{ fontWeight: "700", fontSize: "16px", width: "160px" }}>Runtime:</Box>
                                    <Box>3h45p</Box>
                                </Box>
                                <Box sx={{ display: "flex" }} mb={2}>
                                    <Box sx={{ fontWeight: "700", fontSize: "16px", width: "160px" }}>Content Rating:</Box>
                                    <Box>G</Box>
                                </Box>
                                <Box sx={{ display: "flex" }} mb={2}>
                                    <Box sx={{ fontWeight: "700", fontSize: "16px", width: "160px" }}>Director:</Box>
                                    <Box>Anh Vũ</Box>
                                </Box>
                                <Box sx={{ display: "flex" }}>
                                    <Box sx={{ fontWeight: "700", fontSize: "16px", width: "160px" }}>Actor:</Box>
                                    <Box>Vũ Anh</Box>
                                </Box>

                            </Box>
                        </Box>
                        <Box className="rating-movie" mt={3}>
                            <Box mb={3} sx={{fontSize: '18px', fontWeight: "650"}}>Rating</Box>
                            <TableContainer component={Paper}>
                                <Table className="tableRating" aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Movie Title</TableCell>
                                            <TableCell align="right">TMDB Rating</TableCell>
                                            <TableCell align="right">Rotten Tomatoes Rating</TableCell>
                                            <TableCell align="right">Metacritic Rating</TableCell>
                                            <TableCell align="right">Movielen Rating</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                                <TableCell align="right">{row.protein}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                </Box>
            </div>
        </Box>
    )
}