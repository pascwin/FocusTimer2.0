import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { colors } from "./src/utils/colors";
import { Focus } from "./src/features/Focus/Focus";
import { Timer } from "./src/features/Timer/Timer";

export default function App() {

  const [subject, setSubject] = useState("Gardening")

  return (
    <>
      <SafeAreaView style={styles.safeContainer}>
        {!subject ? (
          <Focus addSubject={setSubject} />)
          :
          <>
            <Timer 
            focusSubject={subject} 
            onTimerEnd={() => {}}
            clearSubject={() => setSubject(null)}

            />
          </>
        }
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue
  },
  text: {
    color: colors.white,
  }
});
