import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Header } from "../../components/Header";
import { CircleButton } from "../../components/CircleButton";
import { Feather } from "@expo/vector-icons";

export default function MemoDetail() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2025-01-01</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text>買い物リスト 書体や文字の大きさを変える買い物リスト</Text>
      </ScrollView>
      <CircleButton>
        <Feather name="edit" size={24} color="white" />
      </CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  memoHeader: {
    backgroundColor: "#467FD3",
    height: 96,
    justifyContent: "center",
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
  },
  memoDate: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingHorizontal: 27,
    paddingVertical: 32,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#000",
  },
});
