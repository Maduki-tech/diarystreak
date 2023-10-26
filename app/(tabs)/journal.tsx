
import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import Diary from '../../components/diary/diary';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Diary/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
