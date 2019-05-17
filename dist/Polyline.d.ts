/// <reference types="daum.maps.d.ts" />
import * as React from 'react';
import { MapContext } from './Map';
export interface PolylineProps {
    options: daum.maps.PolylineOptions;
    onClick?(e: daum.maps.event.MouseEvent): void;
    onMouseOver?(e: daum.maps.event.MouseEvent): void;
    onMouseOut?(e: daum.maps.event.MouseEvent): void;
}
export declare class Polyline extends React.PureComponent<PolylineProps> {
    static contextType: React.Context<daum.maps.Map>;
    context: React.ContextType<typeof MapContext>;
    private readonly polyline;
    constructor(props: PolylineProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<PolylineProps>): void;
    componentWillUnmount(): void;
    render(): null;
    private _onClick;
    private _onMouseOut;
    private _onMouseOver;
}
//# sourceMappingURL=Polyline.d.ts.map