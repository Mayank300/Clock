import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MyHeader from "../components/MyHeader";
import { RFValue } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function StopWatch() {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <View style={styles.container}>
      <MyHeader title="Clock" />

      <View style={styles.clockBar}>
        <Text style={styles.clockBar_text}>
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </Text>
        <Text style={styles.clockBar_text}>
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        </Text>
        <Text style={styles.clockBar_text}>
          {("0" + ((time / 10) % 100)).slice(-2)}
        </Text>
      </View>

      <View style={styles.buttonView}>
        {!timerOn && time === 0 && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setTimerOn(true)}
          >
            <Text style={styles.text}>START</Text>
          </TouchableOpacity>
        )}
        {timerOn && (
          <TouchableOpacity onPress={() => setTimerOn(false)}>
            <Text style={styles.text}>STOP</Text>
          </TouchableOpacity>
        )}
        {!timerOn && time !== 0 && (
          <TouchableOpacity onPress={() => setTimerOn(true)}>
            <Text style={styles.text}>RESUME</Text>
          </TouchableOpacity>
        )}
        {!timerOn && time > 0 && (
          <TouchableOpacity onPress={() => setTime(0)}>
            <Text style={styles.text}>RESET</Text>
          </TouchableOpacity>
        )}
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
  text: {
    color: "#586589",
    fontSize: RFValue(40),
    marginBottom: RFValue(20),
  },
  clockBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  clockBar_text: {
    color: "white",
    fontSize: RFValue(78),
    marginTop: RFValue(50),
    marginBottom: RFValue(50),
  },
  buttonView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    // fontSize: RFValue(20),
  },
});
