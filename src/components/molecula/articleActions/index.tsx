import React from 'react'
import { StyleSheet, View } from 'react-native'
import BadgeStatus from '../../atomo/badgeStatus'

type ArticleAction = {
    id_article: string,
    id_person: string,
}

export default function ArticleActions({ id_article, id_person }: ArticleAction) {
    return (
        <View style={styles.container_status}>
            <View style={{ flexDirection: 'row' }}>

                <BadgeStatus value={100} iconName='arrow-up' />
                <BadgeStatus iconName='arrow-down' />
            </View>
            <BadgeStatus value={10} iconName='comment' />
            <BadgeStatus iconName='bookmark' />
        </View>
    )
}

const styles = StyleSheet.create({
    container_status: {
        paddingVertical: 10,
        flexDirection: "row",
        gap: 8,
    },
})


