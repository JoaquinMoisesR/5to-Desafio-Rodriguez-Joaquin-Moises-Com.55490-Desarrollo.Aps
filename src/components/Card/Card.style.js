import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        shadowColor: "#000",
        shadowOffset: { height:5, width:3},
        elevation: 15,
        shadowOpacity: 8,
        borderStartWidth: 3,
        borderEndWidth: 8,
        borderRightWidth: 1,
        borderLeftWidth: 10,
        borderEndColor: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius:15,
        borderTopColor: 1,
        shadowRadius: 1,
    },
})