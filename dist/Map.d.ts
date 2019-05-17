/// <reference types="daum.maps.d.ts" />
import * as React from 'react';
export declare const MapContext: React.Context<daum.maps.Map>;
export interface MapProps {
    minLevel?: number;
    maxLevel?: number;
    options: daum.maps.MapOptions;
    onBoundChanged?(map: daum.maps.Map): void;
    onCenterChanged?(map: daum.maps.Map): void;
    onClick?(e: daum.maps.event.MouseEvent, map: daum.maps.Map): void;
    onLoad?(map: daum.maps.Map): void;
    onZoomChanged?(map: daum.maps.Map): void;
}
interface State {
    map?: daum.maps.Map;
}
export declare class Map extends React.PureComponent<MapProps, State> {
    state: State;
    constructor(props: MapProps);
    componentDidUpdate(prevProps: Readonly<MapProps>): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private onComponentMount;
    private _onBoundChanged;
    private _onCenterChanged;
    private _onClick;
    private _onLoad;
    private _onZoomChanged;
}
export {};
//# sourceMappingURL=Map.d.ts.map