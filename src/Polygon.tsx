import * as React from 'react'

import { MapContext } from './Map'

export interface PolygonProps {
  options: daum.maps.PolygonOptions
}

export class Polygon extends React.PureComponent<PolygonProps> {
  public static contextType = MapContext
  public context!: React.ContextType<typeof MapContext>

  private readonly polygon: daum.maps.Polygon

  constructor(props: PolygonProps) {
    super(props)
    this.polygon = new daum.maps.Polygon(this.props.options)
  }

  public componentDidMount() {
    const map = this.context
    this.polygon.setMap(map)
  }

  public componentDidUpdate(prevProps: Readonly<PolygonProps>) {
    if (prevProps.options !== this.props.options) {
      this.polygon.setOptions(this.props.options)
    }
  }

  public componentWillUnmount() {
    this.polygon.setMap(null)
  }

  public render() {
    return null
  }
}
