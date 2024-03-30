import {React,useState,useEffect, useDebugValue} from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { UserAuth } from '../UserContext/AuthContext';
import { db } from '../Firebase/Firebase';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';


const SavedMovies = () => {
  const [movies, setmovies] = useState([])
  const {user}= UserAuth()

  const SlideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const SlideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const movieRef= doc(db,'users',`${user?.email}`)
 const handleRemoveMovie = async(Myid)=>{
try {
  const result = movies.filter((item)=>item.id !== Myid)
  await updateDoc(movieRef, {
    savedMovies:result
  })
} catch (error) {
  console.log(error)
}
 }

  useEffect(()=>{
onSnapshot(doc(db,'users' , `${user?.email}`),(doc)=>{
  setmovies(doc.data()?.savedMovies)
})
  },[user?.email])
  return (
    <>
    <h2 className="text-white font-bold md:text-xl p-4 md:p-8">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={SlideLeft}
          size={30}
          className="bg-white rounded-full absolute left-3 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => (
           <div className="w-[160px] sm:w-[200px] md:w-[240px] ld:w-[280px] inline-block cursor-pointer relative p-2" key={movie.id}>
           <img
             className="w-full h-auto block"
             src={`https://image.tmdb.org/t/p/original/${movie?.img}`}
             alt={movie?.title}
           />
           <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
             <p className=" flex whitespace-normal text-xs md:text-sm font-bold justify-center items-center h-full text-center">
               {movie?.title}
             </p>
             <p onClick={()=>handleRemoveMovie(movie.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose/></p>
             
           </div>
         </div>
          ))}
        </div>
        <MdChevronRight
          onClick={SlideRight}
          size={30}
          className="bg-white rounded-full absolute right-2 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  )
}

export default SavedMovies