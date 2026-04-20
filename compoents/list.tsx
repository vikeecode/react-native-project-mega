import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type AppType = {
  title: string;
};
const ListHeading = ({ title }: AppType) => {
  return (
    <View className="list-head">
      <Text className="list-title">{title}</Text>

      <TouchableOpacity className="list-action">
        <Text className="list-action-text">See all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListHeading;
