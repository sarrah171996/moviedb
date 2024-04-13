import React from 'react'
import Movies from '../Movies/Movies'
import TvShows from '../TvShows/TvShows'
import People from '../People/People'


export default function Home() {
  return (
    <div>
      {/* <h1>home component</h1> */}


      <Movies/>
      <TvShows/>
      <People/>



    </div>
  )
}
