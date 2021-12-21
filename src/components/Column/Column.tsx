import { FC } from "react";
import { StyleSheet, View } from "react-native"

type Props = {
    widthField?: number
}

const Column : FC<Props> = ({ children, widthField}) => {
    const styles = StyleSheet.create({
        wrapper: {
            width: widthField === 1 ? '100%' : '50%',
            justifyContent: 'flex-start',
            paddingHorizontal: 5,
            
        }
    });

    return (
        <View style={styles.wrapper} >
            {children}
        </View>
    );
};

export default Column;