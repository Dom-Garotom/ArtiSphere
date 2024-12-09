import colors from "@/src/styles/color";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {
      flexShrink: 1 , // faz com que o container ocupe apenas o espaço equivalente ao tamanho dos seus elementos filhos 
      alignSelf: "flex-start", // faz com que o container ocupe apenas o espaço equivalente ao tamanho dos seus elementos filhos
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 8,
      backgroundColor: "#fff",
      minHeight: 350,
    },
  

    
    container_info: {
      flexDirection: 'row',
      alignItems:"center",
      gap: 10,
      padding: 10,
      maxHeight: 80
    },

    imagePerson: {
      width: 55,
      height: 55,
      backgroundColor: colors.textSub,
      borderRadius: 16,
    },

    textInfo: {
      fontSize: 16,
      fontWeight: "500",
    },


  
    container_title: {
      gap: 4,
      paddingVertical: 10,
    },
  
    title: {
      fontWeight: '700',
      fontSize: 18,
      color: colors.text
    },

    image: {
      borderRadius: 8,
      maxHeight: 129,
      maxWidth: "100%"      
    },
  
})
  
  
  