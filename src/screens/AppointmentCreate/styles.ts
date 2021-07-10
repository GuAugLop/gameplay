import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label: {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
    },
    subLabel:{
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32,
    },
    select: {
        width: '100%',
        height: 68,
        flexDirection: 'row',
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25

    },
    selectBody:{
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 64,
        height: 68,
        backgroundColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: theme.colors.secondary50,
        marginRight: 20   

    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 35      
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider: {
        marginRight: 4,
        fontSize: 18,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight
    },
    footer:{
        marginVertical: 20,
    }

})