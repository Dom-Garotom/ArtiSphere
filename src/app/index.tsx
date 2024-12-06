import { StyleSheet } from 'react-native'
import { Image, Text, View } from 'react-native'
import colors from '../styles/color'
import ButtonDefault from '../components/atomo/button'
import Stage from '../components/atomo/stage'
import { router } from 'expo-router'

export default function index() {
  return (
    <View style={styles.page}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/images/icon-art.png")} style={styles.image} />

        <Text style={styles.text}>
          O ArtiSphere é mais do que uma plataforma de artigos,
          é o lugar onde ideias se encontram e transformam o mundo.
          Para continuar, escolha como quer fazer parte dessa jornada!
        </Text>

      </View>

      <Stage
        numbStage={3}
        stage={1}
      />

      <ButtonDefault
        text='Crie sua conta e comece'
        onPress={() => router.navigate('/(auth)/signUp')}
      />

      <ButtonDefault
        text='Faça login para continuar explorando'
        onPress={() => router.navigate('/(auth)/signIn')}
      />

    <ButtonDefault
        text='Faça login para continuar explorando'
        onPress={() => router.navigate('/(userRoutes)/info')}
      />

    </View>
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
    width: 150,
    height: 150,
    borderRadius: 16,
    boxShadow: colors.shadow
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
  },

})