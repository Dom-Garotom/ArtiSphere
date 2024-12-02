import { StyleSheet, Text, View } from 'react-native'
import colors from '../../styles/color'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import BadgeStatus from '../../components/atomo/badgeStatus'

export default function index() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>10 Websites every Web developer should at least look</Text>

        <View style={styles.container_tags}>
          <TouchableOpacity style={styles.tags}>
            <Text style={styles.tags_text}>#beginners</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tags}>
            <Text style={styles.tags_text}>#beginners</Text>
          </TouchableOpacity>
        </View>

        <BadgeStatus
          iconName={"rocket"}
          text='likes'
          value={300}
        />

        <BadgeStatus
          iconName={"comments"}
          text='comentários'
          onPress={ () => console.log("teste")}
        />

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },

  // item article
  container: {
    flex: 1,
    padding: 24,
    maxHeight: 200,
    borderRadius: 12,
    backgroundColor: "#FFF",
  },

  container_tags: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  title: {
    fontWeight: '600',
    fontSize: 18,
    color: colors.text
  },

  tags: {
    minWidth: 50,
  },

  tags_text: {
    fontSize: 16,
    color: colors.textSub,
    fontWeight: '500'
  },

})
