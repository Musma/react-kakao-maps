import * as React from 'react'

import { MapContext } from './Map'

export interface RectangleProps {
  options: daum.maps.RectangleOptions
}

export class Rectangle extends React.PureComponent<RectangleProps> {
  public static contextType = MapContext
  public context!: React.ContextType<typeof MapContext>

  private readonly rectangle: daum.maps.Rectangle

  constructor(props: RectangleProps) {
    super(props)
    this.rectangle = new daum.maps.Rectangle(this.props.options)
  }

  public componentDidMount() {
    const map = this.context
    this.rectangle.setMap(map)
  }

  public componentDidUpdate(prevProps: Readonly<RectangleProps>) {
    if (prevProps.options !== this.props.options) {
      this.rectangle.setOptions(this.props.options)
    }
  }

  public componentWillUnmount() {
    this.rectangle.setMap(null)
  }

  public render() {
    return null
  }
}
