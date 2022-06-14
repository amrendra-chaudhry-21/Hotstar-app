const api_key='eb5e7f88c9a39c6d8b4f9a47e8eb8ec2';

export default {
    fetchTrending:`/trending/all/day?api_key=${api_key}`,
    fetchTopRated:`/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    fetchActionMovies:`/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${api_key}&with_genres=10479`,
    fetchMystery:`/discover/movie?api_key=${api_key}&with_genres=9648`,
    fetchSciFi:`/discover/movie?api_key=${api_key}&with_genres=878`,
    fetchWestern:`/discover/movie?api_key=${api_key}&with_genres=37`,
    fetchAnimation:`/discover/movie?api_key=${api_key}&with_genres=16`,
    fetchTv:`/discover/movie?api_key=${api_key}&with_genres=10770`,
};