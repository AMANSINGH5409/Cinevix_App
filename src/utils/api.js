import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmRkMjQ4MWJmMDVhYzc3MDI1MGJiNGRlNDE1MzEzOSIsInN1YiI6IjY0YzQ5ZmQ2Y2FkYjZiMDBhYzY1NDg2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QeNEkl5LZvnoNUI60xq3JXRjc5zXi9SQB5YHDn4Cv6g";

const headers = {
  accept: "application/json",
  Authorization: "Bearer " + TMDB_TOKEN,
};

export const fetchDataFromAPI = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
