/// <reference types="daum.maps.d.ts" />
import * as React from 'react';
import { MapContext } from './Map';
export interface PolygonProps {
    options: daum.maps.PolygonOptions;
}
export declare class Polygon extends React.PureComponent<PolygonProps> {
    static contextType: React.Context<daum.maps.Map>;
    context: React.ContextType<typeof MapContext>;
    private readonly polygon;
    constructor(props: PolygonProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<PolygonProps>): void;
    componentWillUnmount(): void;
    render(): null;
}
//# sourceMappingURL=Polygon.d.ts.map