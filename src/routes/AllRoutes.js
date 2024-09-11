import {Routes, Route} from 'react-router-dom';
import {Moviedetail,Movielist,Pagenotfound,Search} from '../pages';

export const AllRoutes = () => {
    return (
      <>
        <Routes>
            <Route path="/" element={ <Movielist apiPath="movie/now_playing" title="Now Playing"/> }/>
            <Route path="movie/:id" element={ <Moviedetail /> }/>
            <Route path="movie/popular" element={ <Movielist apiPath="movie/popular" title="Popular"/> }/>
            <Route path="movie/top" element={ <Movielist apiPath="movie/top_rated" title="Top Rated"/> }/>
            <Route path="movie/upcoming" element={ <Movielist apiPath="movie/upcoming" title="Upcoming"/> }/>
            <Route path="search" element={ <Search apiPath="search/movie" title="Search"/> }/>
            <Route path="*" element={ <Pagenotfound  title="Page not found"/> }/>
        </Routes>
      </>
    )
  }