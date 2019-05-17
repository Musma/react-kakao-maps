import * as React from 'react';
import { MapContext } from './Map';
export class Rectangle extends React.PureComponent {
    constructor(props) {
        super(props);
        this.rectangle = new daum.maps.Rectangle(this.props.options);
    }
    componentDidMount() {
        const map = this.context;
        this.rectangle.setMap(map);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.options !== this.props.options) {
            this.rectangle.setOptions(this.props.options);
        }
    }
    componentWillUnmount() {
        this.rectangle.setMap(null);
    }
    render() {
        return null;
    }
}
Rectangle.contextType = MapContext;
//# sourceMappingURL=Reactangle.js.map