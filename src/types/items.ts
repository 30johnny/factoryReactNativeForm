export interface Item {
    content?: any
    label?: string
    value?: string | Date | number
    options?: [string | number]
    placeholder?: string
    name?: string
    type: string
    width?: number
    typeButton?: string
}