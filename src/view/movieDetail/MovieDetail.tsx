import { View, Text, StyleSheet, Image } from "react-native";
import { Movie } from "../../generic/movie";

type MovieDetailProps = {
  route: {
    params: {
      movie: Movie;
    };
  };
};

export default function MovieDetail({ route }: MovieDetailProps) {
  const { foto, id, nome, sinopse } = route.params.movie;

  return (
    <View style={style.container}>
      <Text style={style.title}>{nome}</Text>
      <View>
        <Image source={{ uri: foto }} style={style.image} />
        <Text style={style.description}>{sinopse}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 10,
    alignSelf: "center",
  },
  description: {
    margin: 10,
    marginTop: 20,
    fontSize: 16,
    textAlign: "justify",
  },
});
