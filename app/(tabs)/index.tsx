import { StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import Diary from "../../components/diary/diary";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Diary />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
