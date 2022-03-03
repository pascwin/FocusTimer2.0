import React, { useState } from "react";
import Countdown from "../../components/Countdown";
import { Text, View, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";
import { colors } from "../../utils/colors";
import RoundedButton from "../../components/RoundedButton"
import { spacing } from "../../utils/sizes";

const DEFAULT_TIME = 0.1;

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {

    const [isStarted, setIsStarted] = useState(false)
    const [progress, setProgress] = useState(1)
    const [minutes, setMinutes] = useState(DEFAULT_TIME)

    return (
        <>
            <View style={styles.container}>

                <View style={styles.countdown}>
                    <Countdown isPaused={!isStarted} onProgress={setProgress} minutes={minutes} onEnd={() => { }} />

                    <View style={{ paddingTop: spacing.md, alignItems: "center" }}>
                        <Text style={styles.title}>Focus on {focusSubject}</Text>
                        <Text style={styles.task}>Focus on {focusSubject}</Text>
                    </View>
                </View>
                <View style={{paddingTop: spacing.sm}}>
                    <ProgressBar color={colors.progressBar} style={{height: 10}} progress={progress} />
                </View>
                <View style={styles.buttonWrapper}>
                    {!isStarted ?
                        <RoundedButton title="start" size={100} onPress={() => setIsStarted(true)} />
                        :
                        <RoundedButton title="pause" size={100} onPress={() => setIsStarted(false)} />
                    }
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    countdown: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: colors.white,
        fontWeight: "bold",
        textAlign: "center"
    },
    task: {
        color: colors.white,
        textAlign: "center"
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: "row",
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
    }
})