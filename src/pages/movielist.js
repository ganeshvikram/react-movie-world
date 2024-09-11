import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';
import {Card} from '../components'
export const Movielist = ({apiPath,title}) => {
    const {data: movies} =  useFetch(apiPath)
    useTitle(title);

   console.log(movies)
  return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="container flex justify-center flex-wrap">
            {movies.map((movie)=>(
                <Card key={movie.id} movie={movie} />
            ))}
        </div>
        </div>
  )
}
