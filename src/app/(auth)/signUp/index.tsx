import { ScrollView } from 'react-native'
import { Image, Text, View } from 'react-native'
import Stage from '@/src/components/atomo/stage'
import AuthSwitch from '@/src/components/atomo/AuthSwitch'
import SignUpForm from '@/src/components/molecula/signUpForm'
import { styles } from './style'

export default function index() {
  return (
    <ScrollView>
      <View style={styles.page}>

        <Image source={require("../../../../assets/images/icon-art.png")} style={styles.image} />

        <View>
          <Text style={styles.title}>🌟 Crie sua conta</Text>
          <Text style={styles.text}>
            Junte-se ao ArtiSphere e compartilhe suas ideias com o mundo.
            Conhecimento e conexão começam aqui!
          </Text>
        </View>

        <SignUpForm/>

        <View style={{ gap: 20 }}>

          <AuthSwitch
            route={'/(auth)/signIn'}
            title='Já é um explorador do ArtiSphere?'
            subTitle='Faça login para continuar publicando'
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

