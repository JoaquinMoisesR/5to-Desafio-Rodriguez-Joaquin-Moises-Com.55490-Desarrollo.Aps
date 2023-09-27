import { StyleSheet } from "react-native";
import {colors} from '../../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 5,
        backgroundColor: colors.quaternary,
    },
    name: {
        fontSize: 25,
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})