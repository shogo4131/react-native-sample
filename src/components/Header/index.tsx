import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Memo App</Text>
      <View>
        <Text>ログアウト</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 30,
    backgroundColor: "#467FD3",
    color: "white",
  },
});
