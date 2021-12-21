import ButtonFactory from "../Button";
import ColumnFactory from "../Column";
import InputFactory from "../Input";
import InputPasswordFactory from "../InputPassword";
import RowFactory from "../Row";

class FactoryMapper {
  factories: any;
  constructor() {

    const inputFactory = new InputFactory();
    const passwordFactory = new InputPasswordFactory();
    const rowFactory = new RowFactory();
    const columnFactory = new ColumnFactory();
    const buttonFactory = new ButtonFactory();


    this.factories = {};
    this.factories[inputFactory.type] = inputFactory;
    this.factories[passwordFactory.type] = passwordFactory;
    this.factories[rowFactory.type] = rowFactory;
    this.factories[columnFactory.type] = columnFactory;
    this.factories[buttonFactory.type] = buttonFactory;
  }

  factory = (type: string) => type && this.factories[type];
}

export default FactoryMapper;