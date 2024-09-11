import { useState, useEffect }  from 'react'
import { useParams }  from 'react-router-dom'
import { useTitle } from '../hooks/useTitle';
import backup from '../backup.JPG';

export const Moviedetail = () => {
  const parms = useParams();
  const [movie,setmovie] = useState({});
  const posterpath1 = movie.poster_path? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`: backup;
  useTitle(movie.original_title);
  useEffect(()=>{
    async function fetchMovie(){
      const response =  await fetch(`https://api.themoviedb.org/3/movie/${parms.id}?api_key=${process.env.REACT_APP_API_KEY}`);
      const json = await response.json();
      setmovie(json);
    }
    if(parms.id){
      fetchMovie();
    }
    
  },[parms.id])

  return (

    ((movie && movie.original_title)? (
    <section className=" bg-white flex flex-wrap justify-center py-5  text-gray-700">
        <div className="max-w-sm m-5">
            <img alt={movie.original_title} className="rounded" src={posterpath1}/>
        </div>
        <div className="m-5 mx-20 text-left">
          <div className="max-w-2xl text-4xl font-bold">
            {movie.original_title}
          </div>
          <div className="my-5 max-w-2xl">
            <div className="text-lg">
                {movie.overview}
            </div>
            <div className="my-8">

            {movie?.genres?.map((genre)=>(
                <span key={genre.id} className="mr-2 bg-gray-100 text-gray-800 text-lg font-medium rounded  border px-3 py-0.5 rounded border-gray-500">{genre.name}</span>

            ))}

            </div>
            
            <div className="flex items-center">
                <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{movie.vote_average}</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>{movie.vote_count} reviews
            </div>

            <div className="my-4">
              <span className="font-bold"> Runtime :  </span>  {movie.runtime}
            </div>
            <div className="my-4">
              <span className="font-bold"> Budget :  </span>  {movie.budget}
            </div>
            <div className="my-4">
              <span className="font-bold"> Revenue :  </span>  {movie.revenue}
            </div>
            <div className="my-4">
              <span className="font-bold">  Release Date :  </span>  {movie.release_date}
            </div>
            <div className="my-4">
              <span className="font-bold"> IMDB Code :  </span>  <a rel="noreferrer" href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank">{movie.imdb_id}</a>
            </div>
          </div>
        </div>
    </section>):(<p className="my-5">Loading...</p>))
  )
  
}
