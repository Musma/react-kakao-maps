import * as React from 'react';
import { MapContext } from './Map';
export class Polyline extends React.PureComponent {
    constructor(props) {
        super(props);
        this.polyline = new daum.maps.Polyline(this.props.options);
        this._onClick = this._onClick.bind(this);
        this._onMouseOut = this._onMouseOut.bind(this);
        this._onMouseOver = this._onMouseOver.bind(this);
    }
    componentDidMount() {
        const map = this.context;
        this.polyline.setMap(map);
        daum.maps.event.addListener(this.polyline, PolylineEvent.click, this._onClick);
        daum.maps.event.addListener(this.polyline, PolylineEvent.mouseover, this._onMouseOver);
        daum.maps.event.addListener(this.polyline, PolylineEvent.mouseout, this._onMouseOut);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.options !== this.props.options) {
            this.polyline.setOptions(this.props.options);
        }
    }
    componentWillUnmount() {
        daum.maps.event.removeListener(this.polyline, PolylineEvent.click, this._onClick);
        daum.maps.event.removeListener(this.polyline, PolylineEvent.mouseover, this._onMouseOver);
        daum.maps.event.removeListener(this.polyline, PolylineEvent.mouseout, this._onMouseOut);
        this.polyline.setMap(null);
    }
    render() {
        return null;
    }
    _onClick(e) {
        const { onClick } = this.props;
        if (onClick) {
            onClick(e);
        }
    }
    _onMouseOut(e) {
        const { onMouseOut } = this.props;
        if (onMouseOut) {
            onMouseOut(e);
        }
    }
    _onMouseOver(e) {
        const { onMouseOver } = this.props;
        if (onMouseOver) {
            onMouseOver(e);
        }
    }
}
Polyline.contextType = MapContext;
var PolylineEvent;
(function (PolylineEvent) {
    PolylineEvent["click"] = "click";
    PolylineEvent["mouseover"] = "mouseover";
    PolylineEvent["mouseout"] = "mouseout";
})(PolylineEvent || (PolylineEvent = {}));
//# sourceMappingURL=Polyline.js.map