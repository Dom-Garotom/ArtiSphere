import { FlatList, StyleSheet } from 'react-native'
import colors from '../../../styles/color'
import Article from '@/src/components/molecula/article'
import { articles } from '@/src/utils/db/articleDb'

export default function index() {
  return (
    <FlatList
      style={styles.page}
      contentContainerStyle={{ gap: 10 }}
      data={articles}
      keyExtractor={item => item.id_Article!}
      renderItem={({ item }) => (
        <Article
          key={item.id_Article}
          author={item.author}
          tags={item.tags}
          timeArticle={item.timeArticle}
          title={item.title}
          id_Article={item.id_Article}
          id_Person={item.id_Person}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
})