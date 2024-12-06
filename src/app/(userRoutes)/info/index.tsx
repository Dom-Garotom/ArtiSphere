import { StyleSheet } from 'react-native'
import { Image, Text, View } from 'react-native'
import colors from '../../../styles/color'
import ButtonDefault from '../../../components/atomo/button'
import Stage from '../../../components/atomo/stage'
import { router } from 'expo-router'

export default function index() {
    return (
        <>
            <Image source={require("../../../assets/astronauta-1.png")} style={styles.image} />
            <View style={styles.page}>
                <Text style={styles.title}>💬 Pronto para compartilhar seu conhecimento com o mundo?
                </Text>
                <Text style={styles.text}>
                    Seja você um escritor ou um leitor ávido, o ArtiSphere é o lugar certo!
                    Transforme ideias em impacto, e conhecimento em conexão.
                </Text>

                <Stage
                    numbStage={3}
                    stage={2}
                />

                <ButtonDefault
                    text='continuar'
                    onPress={() => router.navigate('/(userRoutes)/preferences')}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 20,
        gap: 16,
    },

    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        gap: 12,
    },

    image: {
        width: "100%",
        maxHeight: 200,
        boxShadow: colors.shadow
    },

    title: {
        fontWeight: '500',
        fontSize: 24,
        marginBottom: 8,
    },

    text: {
        fontSize: 18,
        flex: 1
    },

})