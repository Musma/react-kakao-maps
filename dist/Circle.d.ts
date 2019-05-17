/// <reference types="daum.maps.d.ts" />
import * as React from 'react';
import { MapContext } from './Map';
export interface CircleProps {
    options: daum.maps.CircleOptions;
}
export declare class Circle extends React.PureComponent<CircleProps> {
    static contextType: React.Context<daum.maps.Map>;
    context: React.ContextType<typeof MapContext>;
    private readonly circle;
    constructor(props: CircleProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<CircleProps>): void;
    componentWillUnmount(): void;
    render(): null;
}
//# sourceMappingURL=Circle.d.ts.map