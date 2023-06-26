const apiKey = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `/discover/movie?api_key=${apiKey}&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2022&with_original_language=hi`,
  fetchNetflixOriginals: `discover/tv?api_key=${apiKey}&with_networks=213`,
  fetchPopular: `/discover/movie?api_key=${apiKey}`,
  fetchEnglish: `/trending/all/week?api_key=${apiKey}&language=en-US`,
  fetchUpcoming: `/discover/movie?api_key=${apiKey}&language=hi-IN&region=IN&with_original_language=hi`,
  fetchKids: `/discover/tv?api_key=${apiKey}&language=hi-IN&region=IN&with_original_language=hi&with_genres=10762`,
  fetchDrama: `/discover/tv?api_key=${apiKey}&language=hi-IN&region=IN&sort_by=popularity.desc&with_original_language=hi&with_genres=18`,
};

export default requests;
