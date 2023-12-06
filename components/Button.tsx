import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { COLORS } from "../constants/Colors";

interface IProp {
  title: string;
  onPressHandler: () => void;
  customWrapperStyles?: any;
  customTextstyle?: any;
  isDisabled?: boolean;
}

export const Button = ({
  title,
  onPressHandler,
  customWrapperStyles = {},
  isDisabled = false,
  customTextstyle = {},
}: IProp) => {
  return (
    <TouchableOpacity
      style={[styles.btnWrapper, customWrapperStyles]}
      onPress={onPressHandler}
      disabled={isDisabled}
    >
      <Text style={[styles.btnText, customTextstyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    width: "100%",
    marginTop: 20,
    backgroundColor: COLORS.wine,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 10,
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
});
