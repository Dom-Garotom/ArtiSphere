import colors from "@/src/styles/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    authSwitch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxHeight: 72,
        minHeight: 68,
        padding: 10,
        gap: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: colors.border,
    },

    authSwitch_title: {
        fontWeight: '500',
    },

    authSwitch_subTitle: {
        fontWeight: '500',
        color: colors.secondary
    },
})