import * as React from 'react';
import { render } from 'react-dom';
import { MapContext } from './Map';
export class CustomOverlay extends React.PureComponent {
    constructor(props) {
        super(props);
        this.customOverlay = new daum.maps.CustomOverlay(this.props.options);
    }
    componentDidMount() {
        const { children, visible, options } = this.props;
        const map = this.context;
        this.customOverlay.setMap(map);
        // 처음에는 visible = false 하고,
        this.customOverlay.setVisible(false);
        if (children) {
            const div = document.createElement('div');
            render(React.createElement(React.Fragment, null, children), div);
            this.customOverlay.setContent(div);
            this.customOverlay.setPosition(options.position);
            // 조금 뜸을 들였다가 visible = true 해야 정상적인 position에 나타난다.
            const handle = setTimeout(() => {
                this.customOverlay.setVisible(visible);
                clearTimeout(handle);
            });
        }
    }
    componentDidUpdate(prevProps) {
        const { options, visible } = this.props;
        const { options: prevOptions } = prevProps;
        if (prevOptions !== options) {
            if (prevOptions.map !== options.map) {
                this.customOverlay.setMap(options.map);
            }
            if (prevOptions.position !== options.position) {
                this.customOverlay.setPosition(options.position);
            }
            if (prevOptions.zIndex !== options.zIndex) {
                this.customOverlay.setZIndex(options.zIndex);
            }
            this.customOverlay.setVisible(visible);
        }
    }
    componentWillUnmount() {
        this.customOverlay.setMap(null);
    }
    render() {
        return null;
    }
}
CustomOverlay.contextType = MapContext;
//# sourceMappingURL=CustomOverlay.js.map