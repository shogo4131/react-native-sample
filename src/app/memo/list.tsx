import { StyleSheet, View } from "react-native";
import { CircleButton } from "../../components/CircleButton";
import { Header } from "../../components/Header";
import { List } from "../../components/List";

export default function MemoList() {
  return (
    <View style={styles.container}>
      <Header />
      <List />
      <List />
      <List />
      <CircleButton>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
