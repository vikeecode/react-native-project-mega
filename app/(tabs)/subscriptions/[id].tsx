import { View, Text } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";

const subscriptiondetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>subscriptiondetails {id}</Text>
      <Link href="/">Go to Home</Link>
    </View>
  );
};

export default subscriptiondetails;
