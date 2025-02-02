import { View, Text, StyleSheet, TextInput } from "react-native";
import { Header } from "../../components/Header";

export default function Login() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput style={styles.input} value="email" />
        <TextInput style={styles.input} value="password" />
        <View style={styles.button}>
          <Text style={styles.buttonText}>submit</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Text style={styles.footerLink}>Sign up</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  inner: {
    paddingHorizontal: 24,
    paddingVertical: 27,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 32,
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    backgroundColor: "#FFF",
    height: 48,
    paddingHorizontal: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#467FD3",
    borderRadius: 4,
    marginBottom: 24,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#FFF",
    lineHeight: 32,
  },
  footer: {
    flexDirection: "row",
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#467FD3",
  },
});
