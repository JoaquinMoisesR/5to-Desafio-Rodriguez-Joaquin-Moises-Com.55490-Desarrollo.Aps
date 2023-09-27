import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    listContainer: {
        paddingHorizontal: 15,
        flex: 1,
        marginTop: 20,
    },
    titulo: {
        fontSize: 24,
        padding: 5,
        fontWeight: 'bold',
        color: colors.primary,
        paddingVertical: 8,
    },
})