import axios from "axios";
// import { useDispatch } from "react-redux";



const baseUrl = "https://api.themoviedb.org/3/"
const apikey = "284324d34929646388e9917f8c8608b0&page"



export const fetchPopularMovieApi = async (data) => {
    
    return axios.post(`${baseUrl}movie/now_playing?api_key=${apikey}&page=1`, data, {

        headers: {
            // 'x-access-token': token,
            'Content-Type': 'application/json'
        },
        data: {},
    })
        .then(res => {
            return  res;
        })
        .catch(error => {
            return error.response
        })

  };


export const fetchPopularSeriesApi = async (data  ) => {

    return axios.post(`${baseUrl}tv/on_the_air?api_key=${apikey}&pages=1`, data, {

        headers: {
            // 'x-access-token': token,
            'Content-Type': 'application/json'
        },
        data: {},
    })
        .then(res => {
            return res;
        })
        .catch(error => {
            return error.response
        })

  };

export const fetchTopRatedApi = async (data  ) => {

    return axios.post(`${baseUrl}movie/top_rated?api_key=${apikey}&pages=1`, data, {

        headers: {
            // 'x-access-token': token,
            'Content-Type': 'application/json'
        },
        data: {},
    })
        .then(res => {
            return res;
        })
        .catch(error => {
            return error.response
        })

  };





