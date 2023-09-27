import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors"

export default styles = StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      height: 55,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    text: {
      fontSize:35,
      fontFamily: 'CourgetteRegular',
      color: colors.quaternary,
    },
  })