import Button from "./Button";
import { Item } from '../../types/items';

class ButtonFactory {
    get type() {
        return 'button';
    }

    create(item: Item) {
        return (
            <Button key={item.name} name={item.name ?? 'button_onSubmit'} value={item.label ?? ''} type={item.typeButton ?? 'primary'} />
        )
    }
}

export default ButtonFactory;