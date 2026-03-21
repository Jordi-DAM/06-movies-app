import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>

        {/* Carousel de imágenes */}
        <MainSlideshow movies={nowPlayingQuery.data ?? []} />

        {/* Populares */}
        <MovieHorizontalList
          title="Populares"
          className="mb-5"
          movies={popularQuery.data ?? []}
        />

        {/* Mejor Calificadas */}
        <MovieHorizontalList
          title="Mejor Calificadas"
          className="mb-5"
          movies={topRatedQuery.data?.pages.flat() ?? []}
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        {/* Próximamente */}
        <MovieHorizontalList
          title="Próximamente"
          className="mb-5"
          movies={upcomingQuery.data ?? []}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
