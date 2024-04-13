// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios';


// export default function Details() {
//   const [itemdetails, setItemdetails] = useState([]);
//   let imgSrc ='https://image.tmdb.org/t/p/original'

//   let Params = useParams()

//  let  getDetails = async ()=> {
//    let {data} = await axios.get(`https://api.themoviedb.org/3/${Params.media_type}/${Params.id}videos?api_key=e89e2122754e6a1f2189e7163707309d&language=en-US`)

//   setItemdetails(data)

//  }


//  useEffect(() => {
//    getDetails()
 
//  }, );
  
//   return (
//     <div>

//       <div className="row pt-5 ">

// <div className="col-md-4">
//   <img className='w-100 details-img ' src={imgSrc+itemdetails.backdrop_path} alt="" />
// </div>

// <div className="item-content col-md-6">

//   <h1>{itemdetails.original_title}</h1>
//   <h3 className='mb-3'>{itemdetails.tagline}</h3>
//   <h4> vote : {itemdetails.vote_average}</h4>
//   <h4 className='mb-3'> vote count : {itemdetails.vote_count}</h4>
//   <h4>popularity : {itemdetails.popularity}</h4>
//   <h4 className='mb-3'>release date : {itemdetails.release_date}</h4>
//   <p>{itemdetails.overview}</p>
  

// </div>

//       </div>

//     </div>
//   )
// }
