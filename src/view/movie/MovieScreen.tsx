import { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesData } from "../../reducers/MovieReducer";
import { Movie } from "../../generic/movie";
import { AppDispatch, RootState } from "../../Store";
import { selectMovie } from "../../reducers/MovieReducer";
import Card from "../../components/Card/Card";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../generic/navigation";

type MovieScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Movies"
>;

type HomeViewProps = {
  navigation: MovieScreenNavigationProp;
};

const MovieScreen: React.FC<HomeViewProps> = ({ navigation }) => {
  const dispatch: AppDispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movie.movies);
  const loading = useSelector((state: RootState) => state.movie.isLoading);

  useEffect(() => {
    dispatch(fetchMoviesData());
  }, [dispatch]);

  const Screen = () => {
    return loading ? (
      <View style={style.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ea" />
      </View>
    ) : (
      <View style={style.constainer}>
        <FlatList
          data={movies}
          keyExtractor={(movie: Movie) => movie.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                dispatch(selectMovie(item));
                navigation.navigate("MovieDetail", { movie: item });
              }}
            >
              <Card movie={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Text style={style.title}> Movies </Text>
      {Screen()}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  constainer: {
    backgroundColor: "#FFFFFF",
  },
  loadingContainer: {
    flex: 1,
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 10,
    alignSelf: "center",
  },
});

export default MovieScreen;
