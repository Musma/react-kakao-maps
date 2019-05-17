import * as React from 'react';
import { MapContext } from './Map';
export class Circle extends React.PureComponent {
    constructor(props) {
        super(props);
        this.circle = new daum.maps.Circle(this.props.options);
    }
    componentDidMount() {
        const map = this.context;
        this.circle.setMap(map);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.options !== this.props.options) {
            this.circle.setOptions(this.props.options);
        }
    }
    componentWillUnmount() {
        this.circle.setMap(null);
    }
    render() {
        return null;
    }
}
Circle.contextType = MapContext;
//# sourceMappingURL=Circle.js.map