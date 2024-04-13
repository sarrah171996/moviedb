// import axios from 'axios';
import React
//  { useEffect, useState }
 from 'react'
// import { Link } from 'react-router-dom';


export default function Movies() {
//   let imgSrc ='https://image.tmdb.org/t/p/original'
//   const [trendingMovies, setTrendingMovies] = useState([]);
//   let getTrendingMovies =  async() =>{
//     let {data} = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=e89e2122754e6a1f2189e7163707309d')
// setTrendingMovies(data.results)
//     console.log(data.results);
//   }

//   useEffect(() => {
    
//   getTrendingMovies()
   
//   }, []);


  return (
    <>
    <h1>movies page</h1>
    </>
    // <div>

//             <div className="row gy-5 pt-5">

//               {trendingMovies.map((item,index)=>(

//                 <div className="col-md-2" key={index} >
//                   <Link className='nav-link'  to={`/details/${item.id}/${item.media_type}` }>
//                   <img className='w-100 mb-3' src={imgSrc + item.poster_path} alt=""  />
//                   <h2 className='h6'>{item.title}</h2>
//                   </Link>

//                 </div>



//               ))}






//             </div>

    // </div>
  )
}
