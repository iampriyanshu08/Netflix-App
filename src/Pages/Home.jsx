import React from 'react'
import Landing from '../Components/Landing'
import MoviesRow from '../Components/MoviesRow'
import requests from '../Requests'

const Home = () => {
  return (
    <>
        <Landing/>
        <MoviesRow id= '1' title="UpComing" fetchURl ={requests.requestUpcoming}/>
        <MoviesRow id= '2' title="Popular" fetchURl ={requests.requestPopular}/>
        <MoviesRow id= '3' title="Trending" fetchURl ={requests.requestTrending}/>
        <MoviesRow id= '4' title="Horror" fetchURl ={requests.requestHorror}/>
        <MoviesRow id= '5' title="TopRated" fetchURl ={requests.requestTopRated}/>
        
    </>
  )
}

export default Home