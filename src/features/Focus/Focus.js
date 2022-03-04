import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { colors } from "../../utils/colors";
import { RoundedButton } from "../../components/RoundedButton";
import { spacing } from "../../utils/sizes";

export const Focus = ({addSubject}) => {

    const [focusSubject, setFocusSubject] = useState()

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>What do you like to focus on?</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputField} label="What would you like to focus on?" onChangeText={setFocusSubject} />
                <View style={styles.button}>
                    <RoundedButton title="+" size={40} onPress={() => addSubject(focusSubject)} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
    },
    inputContainer: {
        padding: spacing.lg,
        justifyContent: "top",
        flexDirection: "row"
    },
    inputField: {
        backgroundColor: colors.white
    },
    button: {
        flex: 0.08,
        marginLeft: spacing.md,
        justifyContent: "center"
    },
    textContainer: {
        flex: 0.05,
        alignItems: "center",
        justifyContent: "center",
        marginTop: spacing.md,
    },
    text: {
        color: colors.white,
    },

})