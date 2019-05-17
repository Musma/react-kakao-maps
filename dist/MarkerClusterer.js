import * as React from 'react';
import { MapContext } from './Map';
export const MarkerClustererContext = React.createContext({});
export class MarkerClusterer extends React.PureComponent {
    constructor(props) {
        super(props);
        const { options } = props;
        this.markerClusterer = new daum.maps.MarkerClusterer(options);
    }
    componentDidMount() {
        const map = this.context;
        this.markerClusterer.setMap(map);
    }
    componentWillUnmount() {
        this.markerClusterer.clear();
        this.markerClusterer.setMap(null);
    }
    render() {
        return (React.createElement(MarkerClustererContext.Provider, { value: this.markerClusterer }, this.props.children));
    }
}
MarkerClusterer.contextType = MapContext;
//# sourceMappingURL=MarkerClusterer.js.map