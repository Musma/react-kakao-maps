import * as React from 'react';
export const MapContext = React.createContext({});
export class Map extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        // 주의: 없애면 안 된다.
        };
        this.onComponentMount = this.onComponentMount.bind(this);
        this._onBoundChanged = this._onBoundChanged.bind(this);
        this._onCenterChanged = this._onCenterChanged.bind(this);
        this._onClick = this._onClick.bind(this);
        this._onLoad = this._onLoad.bind(this);
        this._onZoomChanged = this._onZoomChanged.bind(this);
    }
    componentDidUpdate(prevProps) {
        const { options: prevOptions } = prevProps;
        const { options } = this.props;
        const { map } = this.state;
        if (map) {
            if (prevOptions.center == null) {
                map.setCenter(options.center)
            }
            if (!prevOptions.center.equals(options.center)) {
                map.panTo(options.center);
            }
            if (prevOptions.mapTypeId !== options.mapTypeId) {
                map.setMapTypeId(options.mapTypeId || daum.maps.MapTypeId.SKYVIEW);
            }
            if (prevProps.maxLevel !== this.props.maxLevel) {
                map.setMaxLevel(this.props.maxLevel);
            }
            if (prevProps.minLevel !== this.props.minLevel) {
                map.setMinLevel(this.props.minLevel);
            }
        }
    }
    componentWillUnmount() {
        const { map } = this.state;
        if (map) {
            daum.maps.event.removeListener(map, MapEvent.bound_changed, this._onBoundChanged);
            daum.maps.event.removeListener(map, MapEvent.center_changed, this._onCenterChanged);
            daum.maps.event.removeListener(map, MapEvent.click, this._onClick);
            daum.maps.event.removeListener(map, MapEvent.zoom_changed, this._onZoomChanged);
        }
        delete this.state.map;
    }
    render() {
        const { map } = this.state;
        return (React.createElement("div", { ref: this.onComponentMount, style: { height: '100%' } }, map ? (React.createElement(MapContext.Provider, { value: map }, this.props.children)) : null));
    }
    onComponentMount(container) {
        if (container && !this.state.map) {
            daum.maps.load(() => {
                daum.maps.disableHD();
                const map = new daum.maps.Map(container, this.props.options);
                if (this.props.maxLevel) {
                    map.setMaxLevel(this.props.maxLevel);
                }
                if (this.props.minLevel) {
                    map.setMinLevel(this.props.minLevel);
                }
                daum.maps.event.addListener(map, MapEvent.bound_changed, this._onBoundChanged);
                daum.maps.event.addListener(map, MapEvent.center_changed, this._onCenterChanged);
                daum.maps.event.addListener(map, MapEvent.click, this._onClick);
                daum.maps.event.addListener(map, MapEvent.zoom_changed, this._onZoomChanged);
                this.setState({ map });
                // daum.map.Map 참조 외부로 전달
                this._onLoad(map);
            });
        }
    }
    _onBoundChanged() {
        const { onBoundChanged } = this.props;
        const { map } = this.state;
        if (onBoundChanged && map) {
            onBoundChanged(map);
        }
    }
    _onCenterChanged() {
        const { onCenterChanged } = this.props;
        const { map } = this.state;
        if (onCenterChanged && map) {
            onCenterChanged(map);
        }
    }
    _onClick(e) {
        const { onClick } = this.props;
        const { map } = this.state;
        if (onClick && map) {
            onClick(e, map);
        }
    }
    _onLoad(map) {
        const { onLoad } = this.props;
        if (onLoad) {
            onLoad(map);
        }
    }
    _onZoomChanged() {
        const { onZoomChanged } = this.props;
        const { map } = this.state;
        if (onZoomChanged && map) {
            onZoomChanged(map);
        }
    }
}
var MapEvent;
(function (MapEvent) {
    MapEvent["bound_changed"] = "bound_changed";
    MapEvent["center_changed"] = "center_changed";
    MapEvent["click"] = "click";
    MapEvent["zoom_changed"] = "zoom_changed";
})(MapEvent || (MapEvent = {}));
//# sourceMappingURL=Map.js.map