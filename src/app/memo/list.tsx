import { StyleSheet, View } from "react-native";
import { CircleButton } from "../../components/CircleButton";
import { List } from "../../components/List";
import { Feather } from "@expo/vector-icons";
import { useRouter, useNavigation } from "expo-router";

export default function MemoList() {
  const router = useRouter();

  const onPress = () => {
    router.push("/memo/create");
  };

  return (
    <View style={styles.container}>
      <List />
      <List />
      <List />
      <CircleButton onPress={onPress}>
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
