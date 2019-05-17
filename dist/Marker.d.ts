/// <reference types="daum.maps.d.ts" />
import * as React from 'react';
import { MapContext } from './Map';
export interface MarkerProps {
    markerClusterer?: daum.maps.MarkerClusterer;
    options: daum.maps.MarkerOptions;
    onClick?(): void;
    onMouseOver?(): void;
    onMouseOut?(): void;
}
export declare class Marker extends React.PureComponent<MarkerProps> {
    static contextType: React.Context<daum.maps.Map>;
    context: React.ContextType<typeof MapContext>;
    readonly marker: daum.maps.Marker;
    constructor(props: MarkerProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<MarkerProps>): void;
    componentWillUnmount(): void;
    render(): null;
    private _onClick;
    private _onMouseOut;
    private _onMouseOver;
}
//# sourceMappingURL=Marker.d.ts.map