import { Routes, Route, Link } from 'react-router-dom';
import Home from "./component/Home";
import Search from "./component/Search";

function RootRoutes() {
    return (
      <Routes>
        <Route path="/"  element={<Search />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/movie/movieItem/:movieId" element={<Home />} />
      </Routes>
    );
  }
  
  export default RootRoutes;