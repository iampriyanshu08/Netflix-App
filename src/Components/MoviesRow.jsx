import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdChevronLeft , MdChevronRight } from "react-icons/md";
import Movie from './Movie';

const MoviesRow = ({title,fetchURl,id}) => {
const [movies,setMovies] = useState([])


useEffect(()=>{
try {
    axios.get(fetchURl).then((res)=>{
        setMovies(res.data.results)
    })
} catch (error) {
    console.log(error)
}
},[fetchURl]);

const SlideLeft = ()=>{
    let slider = document.getElementById('slider' + id);
    slider.scrollLeft = slider.scrollLeft-500
}
const SlideRight = ()=>{
    let slider = document.getElementById('slider' + id);
    slider.scrollLeft = slider.scrollLeft+500
}


  return (
    <>
     <h2 className='text-white font-bold md:text-xl p-4 md:p-8'>{title}</h2>   
     <div className='relative flex items-center group'>
        <MdChevronLeft onClick={SlideLeft} size={30} className='bg-white rounded-full absolute left-3 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
        <div id={'slider' + id} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
{movies.map((movie)=>(
    <Movie movie={movie} key={movie?.id}/>
))}
        </div>
        <MdChevronRight onClick={SlideRight} size={30} className='bg-white rounded-full absolute right-2 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
     </div>
    </>
  )
}

export default MoviesRow
