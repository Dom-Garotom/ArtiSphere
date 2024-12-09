import { Image, ImageSourcePropType, Text, View } from 'react-native'
import TagsArticle from '@/src/components/molecula/tagsArticle'
import ArticleActions from '../articleActions'
import { styles } from './style'

export type Article = {
    author :string,
    title : string,
    timeArticle: string
    tags : string[],
    image?: ImageSourcePropType | undefined,
    imagePerson?: ImageSourcePropType | undefined,
    id_Article ?: string,
    id_Person ?: string,
}

export default function Article( { id_Article , id_Person , author , tags , title , timeArticle , image , imagePerson} : Article) {
    return (
        <View style={styles.container}>

            <View style={styles.container_info}>
                <Image source={ imagePerson ? imagePerson : require("../../../assets/astronauta-1.png")} style={styles.imagePerson} />
                <View>
                    <Text style={styles.textInfo} >Por: {author} </Text>
                    <Text style={styles.textInfo} >Leitura rápida: {timeArticle} minutos</Text>
                </View>
            </View>

            <View style={styles.container_title}>
                <Text style={styles.title}>{title}</Text>
                <TagsArticle tags={tags} />
            </View>

            <Image style={styles.image} source={ image ? image : require("../../../assets/astronauta-1.png")} />

            <ArticleActions  id_article={id_Article!} id_person={id_Person!}/>

        </View>
    )
}

