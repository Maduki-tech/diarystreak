import { StyleSheet } from "react-native";
import React from "react";
import { View, Text } from "../Themed";
import { Image } from "expo-image";

export default function Entries({
  title,
  brief,
  image,
  date,
}: {
  title: string;
  brief: string;
  image: string;
  date: any;
}) {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={2} style={styles.brief}>
          {brief}
        </Text>
      </View>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  image: {
    width: 80,
    height: 80,
    backgroundColor: "gray",
    borderRadius: 10,
  },

  textContainer: {
    width: "50%",
    marginHorizontal: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  brief: {
    fontSize: 16,
    color: "gray",
  },

  date: {
    fontSize: 16,
    color: "gray",
  },
});
