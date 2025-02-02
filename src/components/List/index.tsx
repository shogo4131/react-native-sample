import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";

export const List = () => {
  return (
    <Link href="/memo/detail" asChild>
      <TouchableOpacity>
        <View style={styles.list}>
          <View>
            <Text style={styles.listTitle}>買い物リスト</Text>
            <Text style={styles.listDate}>2023年1月1日 1:00</Text>
          </View>
          <TouchableOpacity>
            <Feather name="trash-2" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Link>
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
