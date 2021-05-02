import React from "react";
import { render } from "react-dom";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Button,
  TextInput,
  Alert,
} from "react-native";
import MyHeader from "../components/MyHeader";
import { RFValue } from "react-native-responsive-fontsize";
import * as Speech from "expo-speech";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Clock() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = React.useState(time);
  const [text, setText] = React.useState("");

  const utime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  const speak = () => {
    var thingToSay = "Boss, " + text;
    Speech.speak(thingToSay);
  };

  const checkTextInput = () => {
    var notFilled = !text;
    var alerT = notFilled ? Alert.alert("TEXT BOX IS EMPTY") : "";
    var reply = "boss, the text box is empty";
    Speech.speak(reply);
  };

  setInterval(utime, 1000);

  return (
    <View style={styles.container}>
      <MyHeader title="Clock" />
      <View style={styles.clockBar}>
        <Text style={styles.clockBar_text}>{ctime}</Text>
      </View>
      <TextInput
        style={styles.inputBox}
        onChangeText={(text) => {
          setText(text);
        }}
        value={text}
      />

      <View style={styles.buttonText}>
        <Button
          style={styles.buttonText}
          title="Press to hear"
          onPress={() => {
            {
              !text ? checkTextInput() : speak();
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2b3654",
    height: windowHeight,
    flex: 1,
  },
  clockBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  clockBar_text: {
    color: "white",
    fontSize: RFValue(60),
    marginTop: RFValue(60),
    marginBottom: RFValue(60),
  },
  inputBox: {
    marginTop: 50,
    width: RFValue(200),
    alignSelf: "center",
    height: 40,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 22,
  },

  buttonText: {
    textAlign: "center",
    fontSize: RFValue(50),
    fontWeight: "bold",
    marginTop: 10,
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 22,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: RFValue(50),
  },
});
