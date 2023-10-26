import { StyleSheet, TextInput } from "react-native";
import React, { useEffect } from "react";
import Entries from "./entries";
import { ScrollView } from "react-native-gesture-handler";
import { faker } from "@faker-js/faker";
import { View } from "../Themed";

type DiaryProps = {
  title: string;
  brief: string;
  image: string;
  date: any;
};

export default function Diary() {
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState<DiaryProps[]>();
  const [filteredData, setFilteredData] = React.useState<DiaryProps[]>();



  useEffect(() => {
    const createFakeData = (): DiaryProps => {
      return {
        title: faker.lorem.words(3),
        brief: faker.lorem.words(10),
        image: faker.image.url(),
        date:
          faker.date.anytime().getDay() +
          "." +
          faker.date.anytime().getMonth() +
          "." +
          faker.date.anytime().getFullYear(),
      };
    };
    const fakeDataArray = Array.from({ length: 50 }).map((_) =>
      createFakeData(),
    );

    setData(fakeDataArray);
  }, []);

  useEffect(() => {
    if (search === "") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data?.filter((item) => item.title.toLowerCase().includes(search)),
      );
    }

    console.log(data?.forEach((item) => item.title.toLowerCase()));

  }, [search]);



  return (
    <View style={styles.view}>
      <TextInput
        onChangeText={(text) => setSearch(text)}
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="gray"
      />

      <ScrollView>
        {filteredData?.map((data, i) => (
          <Entries
            key={i}
            title={data.title}
            brief={data.brief}
            image={data.image}
            date={data.date}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: 20,
  },

  input: {
    backgroundColor: "#f1f1f1",
    height: 40,
    position: "sticky",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
