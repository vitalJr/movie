import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/api";
import { Movie } from "../generic/movie";

export interface MovieState {
  isLoading: boolean;
  error: string | undefined;
  movie: Movie;
  movies: Movie[];
}

const initialState: MovieState = {
  isLoading: false,
  error: "",
  movie: {
    id: 0,
    nome: "",
    foto: "",
    sinopse: "",
  },
  movies: [],
};

export const fetchMoviesData = createAsyncThunk("movies", async () => {
  const response = await api.get("/r-api/?api=filmes");
  return response.data;
});

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    selectMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMoviesData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMoviesData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectMovie } = movieSlice.actions;

export default movieSlice.reducer;
