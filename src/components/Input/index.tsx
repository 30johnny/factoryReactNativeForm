import Input from "./Input";
import { Item } from '../../types/items';

class InputFactory {
    get type() {
        return 'input';
    }

    create(item: Item) {
        return (
            <Input placeholder={item.placeholder} name={item.name} keyboardType='default' label={item.label} initValue={item.value} secureTextEntry={false} />
        )
    }
}

export default InputFactory;