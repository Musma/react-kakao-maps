import * as React from 'react'

import { MapContext } from './Map'

export interface PolylineProps {
  options: daum.maps.PolylineOptions
  onClick?(e: daum.maps.event.MouseEvent): void
  onMouseOver?(e: daum.maps.event.MouseEvent): void
  onMouseOut?(e: daum.maps.event.MouseEvent): void
}

export class Polyline extends React.PureComponent<PolylineProps> {
  public static contextType = MapContext
  public context!: React.ContextType<typeof MapContext>

  private readonly polyline: daum.maps.Polyline

  constructor(props: PolylineProps) {
    super(props)
    this.polyline = new daum.maps.Polyline(this.props.options)
    this._onClick = this._onClick.bind(this)
    this._onMouseOut = this._onMouseOut.bind(this)
    this._onMouseOver = this._onMouseOver.bind(this)
  }

  public componentDidMount() {
    const map = this.context
    this.polyline.setMap(map)

    daum.maps.event.addListener(
      this.polyline,
      PolylineEvent.click,
      this._onClick,
    )
    daum.maps.event.addListener(
      this.polyline,
      PolylineEvent.mouseover,
      this._onMouseOver,
    )
    daum.maps.event.addListener(
      this.polyline,
      PolylineEvent.mouseout,
      this._onMouseOut,
    )
  }

  public componentDidUpdate(prevProps: Readonly<PolylineProps>) {
    if (prevProps.options !== this.props.options) {
      this.polyline.setOptions(this.props.options)
    }
  }

  public componentWillUnmount() {
    daum.maps.event.removeListener(
      this.polyline,
      PolylineEvent.click,
      this._onClick,
    )
    daum.maps.event.removeListener(
      this.polyline,
      PolylineEvent.mouseover,
      this._onMouseOver,
    )
    daum.maps.event.removeListener(
      this.polyline,
      PolylineEvent.mouseout,
      this._onMouseOut,
    )
    this.polyline.setMap(null)
  }

  public render() {
    return null
  }

  private _onClick(e: daum.maps.event.MouseEvent) {
    const { onClick } = this.props
    if (onClick) {
      onClick(e)
    }
  }

  private _onMouseOut(e: daum.maps.event.MouseEvent) {
    const { onMouseOut } = this.props
    if (onMouseOut) {
      onMouseOut(e)
    }
  }

  private _onMouseOver(e: daum.maps.event.MouseEvent) {
    const { onMouseOver } = this.props
    if (onMouseOver) {
      onMouseOver(e)
    }
  }
}

enum PolylineEvent {
  click = 'click',
  mouseover = 'mouseover',
  mouseout = 'mouseout',
}
