import { Item } from "../../types/items";
import FactoryMapper from "./FactoryMapper";

class Factory {
    factoryMapper: FactoryMapper;
    constructor() {
      this.factoryMapper = new FactoryMapper();
    }

    createWrapper(item: Item) {
      const { content } = item;
      return this.createElement(item, <>{content.map((subItem: Item) => this.create(subItem))}</>);
    }

    createElement(item: Item, children: any) {
      const { type } = item;
      const factory = this.factoryMapper.factory(type);
      return factory.create(item, children);
    }
  
    create(item: Item) {
      const { content } = item;
      return content ? this.createWrapper(item) : this.createElement(item, null);
    }
  }
  
  export default Factory;