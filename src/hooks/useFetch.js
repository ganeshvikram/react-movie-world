import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (apiPath,search='') => {
    const [data,setData] = useState([]);
    var url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`
    
    if(search.length>0){
        url = url+`&query=${search}`
    }
    
    useEffect(()=>{
        
        async function fetchMovie(){
            console.log(`-----`);
           const response =  await fetch(url);
           const json = await response.json();
           console.log(`-----`+json);
           setData(json.results);
        }
        fetchMovie();
    },[url]);

    return {data}
}


