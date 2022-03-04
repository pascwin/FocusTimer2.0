import React, { useState } from "react";
import Countdown from "../../components/Countdown";
import { Text, View, StyleSheet, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { colors } from "../../utils/colors";
import RoundedButton from "../../components/RoundedButton"
import { spacing } from "../../utils/sizes";
import { useKeepAwake } from "expo-keep-awake";

const DEFAULT_TIME = 0.1;

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS
];

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {

    useKeepAwake()

    const [isStarted, setIsStarted] = useState(false)
    const [progress, setProgress] = useState(1)
    const [minutes, setMinutes] = useState(DEFAULT_TIME)


    const onEnd = (reset) => {
        Vibration.vibrate(PATTERN)
        setIsStarted(false)
        setProgress(1)
        reset()
        onTimerEnd(focusSubject);
    }

    return (
        <>
            <View style={styles.container}>

                <View style={styles.countdown}>
                    <Countdown isPaused={!isStarted} onProgress={setProgress} minutes={minutes}
                        onEnd={(reset) => onEnd(reset)}
                    />

                    <View style={{ paddingTop: spacing.md, alignItems: "center" }}>
                        <Text style={styles.title}>Focus on {focusSubject}</Text>
                        <Text style={styles.task}>Focus on {focusSubject}</Text>
                    </View>
                </View>
                <View style={{ paddingTop: spacing.sm }}>
                    <ProgressBar color={colors.progressBar} style={{ height: 10 }} progress={progress} />
                </View>
                <View style={styles.buttonContainer}>
                    <RoundedButton title="10" size={75} onPress={() => setMinutes(10)} style={{margin: 5}}/>
                    <RoundedButton title="15" size={75} onPress={() => setMinutes(15)} style={{margin: 5}}/>
                    <RoundedButton title="20" size={75} onPress={() => setMinutes(20)} style={{margin: 5}}/>
                </View>
                <View style={styles.buttonWrapper}>
                    {!isStarted ?
                        <RoundedButton title="start" size={100} onPress={() => setIsStarted(true)} />
                        :
                        <RoundedButton title="pause" size={100} onPress={() => setIsStarted(false)} />
                    }
                </View>
                <View style={styles.cancelContainer}>
                    <RoundedButton size={50} title="-" onPress={clearSubject} />
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
        flex: 0.25,
        flexDirection: "row",
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        flex: 0.2,
        flexDirection: "row",
        marginTop: spacing.lg,
        alignItems: "center",
        justifyContent: "center"
    },
    cancelContainer: {
        flex: 0.15,
        alignItems: "center",
        justifyContent: "center",
    }
})