import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants/Colors";

interface IProp {
  count: number;
}

export default function Timer({ count }: IProp) {
  const getRemainingTime = (seconds: number) => {
    const date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substring(11, 19);
  };

  return (
    <View style={styles.countDownWrapper}>
      <Text
        style={
          count > 15
            ? [styles.countDownCount, styles.active]
            : [styles.countDownCount, styles.timeUp]
        }
      >
        {getRemainingTime(count)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  countDownWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10,
    marginTop: 25,
    borderColor: COLORS.lightGray
  },
  countDownText: {
    fontSize: 14,
    fontWeight: "400",
  },
  countDownCount: {
    fontSize: 24,
    fontWeight: "600",
  },
  active: {
    color: COLORS.green,
  },
  timeUp: {
    color: COLORS.wine,
  },
});
