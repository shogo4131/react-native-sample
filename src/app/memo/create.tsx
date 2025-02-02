import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { CircleButton } from "../../components/CircleButton";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function CreateMemo() {
  const router = useRouter();

  const onPress = () => {
    router.push("/memo/list");
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} />
      </View>
      <CircleButton onPress={onPress}>
        <Feather name="check" size={24} color="white" />
      </CircleButton>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});
