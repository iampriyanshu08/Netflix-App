import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../UserContext/AuthContext";
import { db } from "../Firebase/Firebase";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const Movie = ({ movie }) => {
  const [saved, setsaved] = useState(false);

  const [like, setLike] = useState(false);
  const { user } = UserAuth();

  const MovieId = doc(db,'users',`${user?.email}`)


  const SavedMovies = async()=>{
    if(user?.email){
      setLike(!like)
      setsaved(true);
      await updateDoc(MovieId,{
        savedMovies : arrayUnion({
          id:movie.id,
          title: movie.title,
          img:movie.backdrop_path
        })
      })
    }
    else{
     toast.error('PLease login so save movies')
    }
  }
  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] ld:w-[280px] inline-block cursor-pointer relative p-2">
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className=" flex whitespace-normal text-xs md:text-sm font-bold justify-center items-center h-full text-center">
            {movie?.title}
          </p>
          <p onClick={SavedMovies}>
            {like ? (
              <FaHeart className="absolute top-4 left-4 text-gray-300" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
