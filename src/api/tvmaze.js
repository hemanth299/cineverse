const BASE_URL = "https://api.tvmaze.com/";

const apiget = async (SearchQuery)=>{
  const response = await fetch(`${BASE_URL}${SearchQuery}`);
  const body = await response.json();

  return body;
}

export const SearchShows = (Query,Option)=>{
  return apiget(`search/${Option}?q=${Query}`);
}