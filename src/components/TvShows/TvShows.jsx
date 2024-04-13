import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

 

export default function TvShows() {

  const [tvSowsTrending, setTvSowsTrending] = useState([]);
  let imgSrc ='https://image.tmdb.org/t/p/original'

  let getTvShowsTrending =  async() => {
    let {data} = await axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=e89e2122754e6a1f2189e7163707309d')
    setTvSowsTrending(data.results)
    console.log(data.results);

  }

  useEffect(() => {
    getTvShowsTrending()
  
  }, []);







  return (
    <div>
           <div className="row gy-5 pt-5">
            {tvSowsTrending.map((item,index)=> 
            <div className="col-md-2 " key={index}>
         <Link className='nav-link'  to= {`/details/${item.id}/${item.media_type}`}>

              <img className='w-100 mb-3'  src={imgSrc + item.poster_path} alt="" />
              <h2 className='h6'>{item.name}</h2>
              </Link>
            </div>
            )}
           </div>
      
    </div>
  )
}
