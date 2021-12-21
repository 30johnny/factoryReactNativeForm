import Input from "./InputPassword";
import { Item } from '../../types/items';

class InputPasswordFactory {
    get type() {
        return 'password';
    }

    create(item: Item) {
        return (
            <Input placeholder={item.placeholder} keyboardType='default' name={item.name} label={item.label} initValue={item.value} secureTextEntry={true} />
        )
    }
}

export default InputPasswordFactory;