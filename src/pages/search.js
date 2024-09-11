import { useFetch } from '../hooks/useFetch';
import {Card} from '../components'
import { useSearchParams } from 'react-router-dom';
export const Search = ({apiPath}) => {
    const [searchparms] = useSearchParams();
    const search = searchparms.get('q')
    const {data: movies} =     useFetch (apiPath,search)

   return (
    <main>
    <div>
        <section>
        <p className="bg-gray-100  text-xl  py-7">{movies.length>0? `Results for: ${search}`:`No results found for: ${search}`}</p>
        
        </section>   
        <section>
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="container flex justify-center flex-wrap">
            {movies.map((movie)=>(
                <Card key={movie.id} movie={movie} />
        
            ))}
            
        </div>
        </div>
        </section>
        </div>
 </main>
 
 
 
   )
}
