import { FC } from "react";
import { StyleSheet, View, Dimensions } from "react-native"

type Props = {
    widthField?: number
}

const Row : FC<Props> = ({ children, widthField = 1 }) => {
    const styles = StyleSheet.create({
        wrapper: {
            width: widthField === 1 ? '100%' : '50%',
            flexDirection: 'row',
            paddingHorizontal: 10,
            justifyContent: 'flex-start',
            marginVertical: 6
        }
    });

    return (
        <View style={styles.wrapper} >
            {children}
        </View>
    )
};

export default Row;