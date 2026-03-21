import { Cast } from "@/infrastructure/interfaces/cast.interface";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { ActorCard } from "./ActorCard";

interface Props {
  cast: Cast[];
}

export const MovieCast = ({ cast }: Props) => {
  return (
    <View className="mt-5 mb-20">
      <Text className="font-bold text-2xl px-5 mb-5">Actores</Text>
      <FlatList
        data={cast}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};
