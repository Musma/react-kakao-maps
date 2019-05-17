/// <reference types="daum.maps.d.ts" />
import * as React from 'react';
import { MapContext } from './Map';
export declare const MarkerClustererContext: React.Context<daum.maps.MarkerClusterer>;
export interface MarkerClustererProps {
    options: daum.maps.MarkerClustererOptions;
}
export declare class MarkerClusterer extends React.PureComponent<MarkerClustererProps> {
    static contextType: React.Context<daum.maps.Map>;
    context: React.ContextType<typeof MapContext>;
    private readonly markerClusterer;
    constructor(props: MarkerClustererProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
//# sourceMappingURL=MarkerClusterer.d.ts.map