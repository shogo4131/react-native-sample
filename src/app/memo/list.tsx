import { StyleSheet, View } from "react-native";
import { CircleButton } from "../../components/CircleButton";
import { Header } from "../../components/Header";
import { List } from "../../components/List";
import { Feather } from "@expo/vector-icons";

export default function MemoList() {
  return (
    <View style={styles.container}>
      <Header />
      <List />
      <List />
      <List />
      <CircleButton>
        <Feather name="plus" size={24} color="white" />
      </CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
