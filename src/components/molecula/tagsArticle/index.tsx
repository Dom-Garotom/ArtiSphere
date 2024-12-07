import { StyleSheet, View } from 'react-native'
import Tag from '../../atomo/tag'


type Tags = {
    tags: string[],
}

export default function TagsArticle( {tags} : Tags) {
    return (
        <View style={styles.container_tags}>
            {tags.map( item => (
                <Tag text={item} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container_tags: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 6,
    },

})


