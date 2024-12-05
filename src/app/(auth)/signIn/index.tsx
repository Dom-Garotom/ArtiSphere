import { ScrollView } from 'react-native'
import { Image, Text, View } from 'react-native'
import Stage from '@/src/components/atomo/stage'
import AuthSwitch from '@/src/components/atomo/AuthSwitch'
import SignInForm from '@/src/components/molecula/signInForm'
import { styles } from './style'

export default function index() {
  return (
    <ScrollView>
      <View style={styles.page}>

        <Image source={require("../../../../assets/images/icon-art.png")} style={styles.image} />

        <View>
          <Text style={styles.title}>🔑 Acesse sua conta</Text>
          <Text style={styles.text}>
            Continue sua jornada de leitura e escrita no ArtiSphere. 
            O próximo grande artigo está esperando por você!
          </Text>
        </View>

        <SignInForm/>

        <View style={{ gap: 20 }}>

          <AuthSwitch
            route={'/(auth)/signUp'}
            title='Novo por aqui?'
            subTitle='Faça parte da nossa comunidade!'
          />

          <AuthSwitch
            route={'/(auth)/signUp'}
            title='Esqueceu a senha?'
            subTitle='Recupere  rapidamente'
          />

          <Stage
            numbStage={3}
            stage={2}
          />
        </View>

      </View>
    </ScrollView>
  )
}

