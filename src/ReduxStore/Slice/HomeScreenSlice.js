import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  fetchPopularMovieApi,
  //   fetchPopularSeriesApi,
  //   fetchTopRatedApi,
} from "../../api/config/api.service";

export const getPopulerMovie = createAsyncThunk("getPopulerMovie", async () => {
  try {
    const arr = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=284324d34929646388e9917f8c8608b0&page=1`
    );
    console.log("await" , arr.data);
    return await  arr?.data;
  } catch (err) {
    console.log("error" , err);
    // custom error
  }
});

const HomeScreenSlice = createSlice({
  name: "HomeSlice",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  recuders: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopulerMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getPopulerMovie.pending, (state, action) => {
        state.isLoading = true;
        state.data = action.payload;
      })
      .addCase(getPopulerMovie.rejected, (state) => {
        state.isError = true;
      });
  },
});

// export const {ganpat} = HomeScreenSlice.actions
export default HomeScreenSlice;
