import colors from "@/src/styles/color";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {
      padding: 10,
      borderRadius: 8,
      backgroundColor: "#fff",
    },
  
  
    container_info: {
      flexDirection: 'row',
      gap: 10,
      padding: 10,
      maxHeight: 80
    },
    imagePerson: {
      width: 55,
      height: 55,
      backgroundColor: colors.textSub,
      borderRadius: "100%",
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
      width: "100%",
      
    },
  
})
  
  
  