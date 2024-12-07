import colors from '@/src/styles/color'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ViewProps } from 'react-native'

type Tags = ViewProps & {
    text: string
}

export default function Tag({ text, ...rest }: Tags) {
    const [color, setColor] = useState("")

    useEffect(() => {
        function generateRandomColor() {
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            return randomColor;
        }

        setColor(generateRandomColor())
    }, [])

    return (
        <View style={styles.tags} {...rest}>
            <Text style={{ color: color, fontWeight: '700' , fontSize: 14 }}>#</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({

    tags: {
        minWidth: 50,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 4,
        borderColor: "#a9a7ae",
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },

    text: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.textSub,
    },

})