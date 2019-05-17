import * as React from 'react'

import { MapContext } from './Map'

export interface CircleProps {
  options: daum.maps.CircleOptions
}

export class Circle extends React.PureComponent<CircleProps> {
  public static contextType = MapContext
  public context!: React.ContextType<typeof MapContext>

  private readonly circle: daum.maps.Circle

  constructor(props: CircleProps) {
    super(props)
    this.circle = new daum.maps.Circle(this.props.options)
  }

  public componentDidMount() {
    const map = this.context
    this.circle.setMap(map)
  }

  public componentDidUpdate(prevProps: Readonly<CircleProps>) {
    if (prevProps.options !== this.props.options) {
      this.circle.setOptions(this.props.options)
    }
  }

  public componentWillUnmount() {
    this.circle.setMap(null)
  }

  public render() {
    return null
  }
}
