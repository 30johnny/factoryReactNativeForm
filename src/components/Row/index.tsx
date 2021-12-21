import Row from "./Row";

class RowFactory {
    get type() {
        return 'row';
    }

    create(item: any, children: any) {
        return (
            <Row widthField={item.width}>
                {children}
            </Row>
        )
    }
}

export default RowFactory;