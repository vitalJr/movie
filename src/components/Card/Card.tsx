import { View, Text, StyleSheet, Image } from "react-native";
import { Movie } from "../../generic/movie";

interface MovieProps {
  movie: Movie;
}

const Card: React.FC<MovieProps> = ({ movie }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{movie.nome}</Text>
      <Image
        source={{ uri: movie.foto }}
        style={style.img}
        resizeMode="cover"
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#f2f2f2",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 10,
    alignSelf: "flex-start",
  },
  img: {
    height: 250,
    zIndex: 2,
  },
});

export default Card;
