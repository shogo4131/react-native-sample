import { StyleSheet, Text, View } from "react-native";

export const List = () => {
  return (
    <View>
      <View style={styles.list}>
        <View>
          <Text style={styles.listTitle}>買い物リスト</Text>
          <Text style={styles.listDate}>2023年1月1日 1:00</Text>
        </View>
        <View>
          <Text>×</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
    paddingHorizontal: 19,
    paddingVertical: 16,
  },
  listTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  listDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },
});
