import {Link} from 'react-router-dom'
export const Card = ({movie}) => {
    const {id,original_title,overview ,poster_path} = movie;
    const image = `https://image.tmdb.org/t/p/w500/${poster_path}`
    return(
        <div className="w-72 p-3 max-h">
            <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg  justify-center ">
                <div className="rounded-t-lg min-h-96 place-items-stretch ">
                    <Link to={`/movie/${id}`}>
                        <img className="rounded-t-lg h-96 " src={image} alt="" />
                    </Link>

                </div>
                
                <div className="py-6 px-8 rounded-lg bg-white">
                <Link to={`/movie/${id}`}>
                    <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{original_title}</h1>
                </Link>
                <p className="text-gray-700 tracking-wide text-left min-h-52">{overview}</p>
                
                </div>
      
            </div>
        </div>
    )

}