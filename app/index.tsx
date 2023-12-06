import { useEffect, useState } from "react";
import { Link, Stack } from "expo-router";
import { Image, Text, View, StyleSheet, SafeAreaView } from "react-native";
import { useCountdown } from "usehooks-ts";
import { COLORS } from "../constants/Colors";
import Timer from "../components/Timer";
import { GuessComponent } from "../components/GuessComponent";

const wordsArray = [
  "obese",
  "producer",
  "bite",
  "control",
  "champion",
  "midnight",
  "copy",
  "whisper",
  "locate",
];

const MAX_GUESSES = 5;

const getWord = () => {
  return wordsArray[Math.floor(Math.random() * wordsArray.length)];
};

export default function Home() {
  const [currentWord, setCurrentWord] = useState("");
  const [guess, setGuess] = useState("");
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);

  const [count, { startCountdown, stopCountdown, resetCountdown }] =
    useCountdown({
      countStart: 60,
      intervalMs: 1000,
    });

  const timeIsRunning = count > 0 && !isCorrectGuess;

  useEffect(() => {
    setCurrentWord(getWord());
    startCountdown();
  }, []);

  const renderWordBoxes = () => {
    return currentWord.split("").map((word, i) => (
      <View style={styles.wordBox} key={`${word}-${i}`}>
        <Text style={styles.wordStyle}>
          {timeIsRunning
            ? i === 0
              ? word.toUpperCase()
              : "*"
            : word.toUpperCase()}
        </Text>
      </View>
    ));
  };

  const compareGuess = () => {
    if (guess.trim().toLowerCase() === currentWord.toLowerCase()) {
      setIsCorrectGuess(true);
      stopCountdown();
      setGuess("");
    } else {
      setGuess("");
    }
  };

  const resetGame = () => {
    setIsCorrectGuess(false);
    setCurrentWord(getWord());
    resetCountdown();
    startCountdown();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "My Lingo",
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      <Timer count={count} />

      <View style={styles.gameWrapper}>
        <View style={styles.topSection}>
          {isCorrectGuess && (
            <Text style={styles.leadingText}>Hurray!!! 🎉🎉</Text>
          )}
          <Text style={styles.leadingText}>
            {timeIsRunning ? "Guess the Word!" : "The Word is"}
          </Text>
          <View style={styles.wordBoxWrapper}>{renderWordBoxes()}</View>
        </View>

        <View style={styles.midSection}>
          <GuessComponent
            guess={guess}
            setGuess={setGuess}
            submitGuess={compareGuess}
            timeIsRunning={timeIsRunning}
            resetGame={resetGame}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.tintGray,
  },
  gameWrapper: {
    marginTop: 30,
    height: "90%",
  },
  wordBox: {
    borderWidth: 1,
    borderRadius: 5,
    width: 40,
    height: 40,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  wordStyle: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.primary,
  },
  wordBoxWrapper: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  leadingText: {
    fontSize: 25,
    fontWeight: "700",
  },
  topSection: {
    height: "35%",
    alignItems: "center",
    justifyContent: "center",
  },
  midSection: {
    marginTop: 20,
  },
});
