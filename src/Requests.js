const key = import.meta.env.VITE_IMDB_API_KEY


const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-IN&page=7`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-IN&page=3`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-IN&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-IN&query=horror&page=6&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-IN&page=3`,
    
   
  };

  export default requests