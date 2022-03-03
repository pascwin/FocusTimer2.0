import React, { useState } from "react";
import Countdown from "../../components/Countdown";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const DEFAULT_TIME = 0.1;

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {

    const [progress, setProgress] = useState(1)
    const [minutes, setMinutes] = useState(DEFAULT_TIME)

    return (
        <>
            <View>
                <Text style={styles.text}>Focus on {focusSubject}</Text>
            </View>
            <Countdown onProgress={setProgress} minutes={minutes} />
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        color: colors.white
    }
})