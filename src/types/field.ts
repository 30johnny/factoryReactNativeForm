export type Props = {
    label?: string
    initValue: any
    keyboardType: any
    placeholder?: string
    name?: string
    secureTextEntry?: boolean
    onChange?: ((text: string) => void) | undefined
}

export type State = {
    value: string
}