/// <reference types="daum.maps.d.ts" />
import * as React from 'react';
import { MapContext } from './Map';
export interface RectangleProps {
    options: daum.maps.RectangleOptions;
}
export declare class Rectangle extends React.PureComponent<RectangleProps> {
    static contextType: React.Context<daum.maps.Map>;
    context: React.ContextType<typeof MapContext>;
    private readonly rectangle;
    constructor(props: RectangleProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<RectangleProps>): void;
    componentWillUnmount(): void;
    render(): null;
}
//# sourceMappingURL=Reactangle.d.ts.map