import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const LoginScreen = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const submitLogin = async () => {
    alert(
      JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    );

    const response = await fetch("http://localhost:3030/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    });

    if (response.status === 200) {
      alert(JSON.stringify(response));
      console.log(JSON.stringify(response));
    } else {
      alert("Something went wrong, please try again later");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.subTitle}>Email</Text>
        <TextInput
          style={styles.input}
          value={userEmail}
          onChangeText={setUserEmail}
        />

        <View style={{ height: 20 }} />

        <Text style={styles.subTitle}>Password</Text>
        <TextInput
          style={styles.input}
          value={userPassword}
          secureTextEntry
          onChangeText={setUserPassword}
        />

        <View style={{ height: 30 }} />

        <View style={styles.titleContainer}>
          <Pressable style={styles.button} onPress={submitLogin}>
            <Text style={styles.subTitle}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "red",
  },
  titleContainer: {
    flex: 0.2,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#A389D4",
    justifyContent: "center",
    alignItems: "center",
  },
  subTitle: {
    width: "100%",
    fontSize: 18,
    paddingVertical: 3,
  },
  input: {
    width: "100%",
    fontSize: 24,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  button: {
    width: "100%",
    fontSize: 24,
    backgroundColor: "#09A9F5",
    padding: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
