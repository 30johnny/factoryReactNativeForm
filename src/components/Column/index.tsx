import Column from "./Column";
import { Item } from "../../types/items";

class ColumnFactory {
    get type() {
        return 'column';
    }

    create(item: Item, children: any) {
        return (
            <Column widthField={item.width} >
                {children}
            </Column>
        )
    }
}

export default ColumnFactory;