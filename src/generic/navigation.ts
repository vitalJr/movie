import { Movie } from "./movie";

export type RootStackParamList = {
  Movies: undefined;
  MovieDetail: { movie: Movie };
};
