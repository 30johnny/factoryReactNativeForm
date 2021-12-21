import { FC } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Props } from "../../types/button";

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        textAlign: 'center',
        alignItems: 'center'
    },
    primary: {
        backgroundColor: '#fecb18'
    },
    normal: {
        borderWidth: 3,
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderColor: '#fecb18'
    },
    textPrimary: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    },
    textNormal: {
        fontSize: 18,
        color: '#fecb18',
        fontWeight: 'bold'
    }
})

const Button: FC<Props> = ({ value, type}) => {
    const getStyles = () => {
        return type === 'primary' ? styles.primary : styles.normal
    };

    const getStylesText = () => {
        return type === 'primary' ? styles.textPrimary : styles.textNormal
    };

    return (
        <TouchableOpacity style={{width: '100%'}} >
            <View style={{...styles.button, ...getStyles()}} >
                <Text style={getStylesText()} >{value}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;
