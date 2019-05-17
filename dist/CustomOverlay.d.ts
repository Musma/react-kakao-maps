/// <reference types="daum.maps.d.ts" />
import * as React from 'react';
import { MapContext } from './Map';
export interface CustomOverlayProps {
    options: daum.maps.CustomOverlayOptions;
    visible: boolean;
}
export declare class CustomOverlay extends React.PureComponent<CustomOverlayProps> {
    static contextType: React.Context<daum.maps.Map>;
    context: React.ContextType<typeof MapContext>;
    private readonly customOverlay;
    constructor(props: CustomOverlayProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<CustomOverlayProps>): void;
    componentWillUnmount(): void;
    render(): null;
}
//# sourceMappingURL=CustomOverlay.d.ts.map