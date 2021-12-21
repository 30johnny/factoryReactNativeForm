import { Component, FC } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { Props, State } from "../../types/field";

const WrapperField: FC<{label: string}> = ({label, children}) => (
    <View style={styles.wrapper} >
        <Text style={styles.label} >{label}</Text>
        {children}
    </View>
);

class Input extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: props.initValue
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e: string){
        this.setState({value: e})
    }

    render() {
        const { value } = this.state;
        const { keyboardType, name, placeholder, label, secureTextEntry } = this.props;

        return (
            <WrapperField label={label ?? ''} >
                <TextInput
                    style={styles.input}
                    key={name}
                    value={value}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    onChangeText={this.onChange}
                />
            </WrapperField>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        borderBottomColor: '#fecb18',
        borderBottomWidth: 2,
        marginVertical: 5,
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8,
    },
    input: {
        paddingHorizontal: 3,
        color: '#3d2f00'
    },
    label: {
        backgroundColor: '#fecb18',
        color: '#3d2f00',
        alignSelf: 'flex-start',
        paddingHorizontal: 14,
        paddingVertical: 3,
        fontWeight: 'bold',
        borderRadius: 10
    }
})

export default Input;