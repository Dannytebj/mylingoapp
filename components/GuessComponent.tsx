import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { COLORS } from "../constants/Colors";
import { Button } from "./Button";

interface IProp {
  guess: string;
  setGuess: (value: string) => void;
  submitGuess: () => void;
  timeIsRunning: boolean;
  resetGame: () => void;
}

export const GuessComponent: React.FC<IProp> = ({
  guess,
  setGuess,
  timeIsRunning,
  submitGuess,
  resetGame
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={guess}
          onChangeText={(text) => setGuess(text)}
          placeholder="Enter Guess"
          placeholderTextColor="#9c9c9c"
          editable={timeIsRunning}
          onSubmitEditing={submitGuess}
          returnKeyType="done"
        />
      </View>


      <View style={styles.submitBtn}>
        <Button
          title="Submit"
          onPressHandler={submitGuess}
          isDisabled={!timeIsRunning}
          customWrapperStyles={!timeIsRunning  && styles.disabledBtn}
        />
      </View>

     {!timeIsRunning && <View style={styles.resetBtnWrap}>
        <Button title="Reset" onPressHandler={resetGame} />
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    marginTop: 10,
    borderRadius: 10,
    width: "90%",
    color: COLORS.black,
    backgroundColor: COLORS.white,
  },
  disabledBtn: {
    backgroundColor: COLORS.gray,
  },
  btnText: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
  },
  submitBtn: {
    marginTop: 5,
    width: '70%'
  },
  resetBtnWrap: {
    marginTop: 5,
    width: '50%'
  },
});
