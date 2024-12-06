import { StyleSheet } from 'react-native'
import { Image, Text, View } from 'react-native'
import colors from '../../../styles/color'
import ButtonDefault from '../../../components/atomo/button'
import Stage from '../../../components/atomo/stage'
import { router } from 'expo-router'

export default function index() {
    return (
        <>
            <Image source={require("../../../assets/astronauta-2.png")} style={styles.image} />
            <View style={styles.page}>
                <Text style={styles.title}>Escolha seus Temas - Embarque nessa Jornada! 🚀</Text>
                <Text style={styles.text}>
                    A exploração do conhecimento está prestes a começar!
                    Para personalizar sua experiência no ArtiSphere,
                    selecione os temas que mais combinam com sua órbita de interesse.
                </Text>

                <Stage
                    numbStage={3}
                    stage={3}
                />

                <ButtonDefault
                    text='continuar'
                    onPress={() => router.navigate('/home')}
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