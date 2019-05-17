import * as React from 'react'

import { MapContext } from './Map'

export interface MarkerProps {
  markerClusterer?: daum.maps.MarkerClusterer
  options: daum.maps.MarkerOptions
  onClick?(): void
  onMouseOver?(): void
  onMouseOut?(): void
}

export class Marker extends React.PureComponent<MarkerProps> {
  public static contextType = MapContext
  public context!: React.ContextType<typeof MapContext>

  public readonly marker: daum.maps.Marker

  constructor(props: MarkerProps) {
    super(props)
    this._onClick = this._onClick.bind(this)
    this._onMouseOut = this._onMouseOut.bind(this)
    this._onMouseOver = this._onMouseOver.bind(this)
    this.marker = new daum.maps.Marker(this.props.options)
  }

  public componentDidMount() {
    const { markerClusterer } = this.props

    if (markerClusterer) {
      markerClusterer.addMarker(this.marker)
    } else {
      const map = this.context
      this.marker.setMap(map)
    }

    daum.maps.event.addListener(this.marker, MarkerEvent.click, this._onClick)
    daum.maps.event.addListener(this.marker, MarkerEvent.mouseover, this._onMouseOver)
    daum.maps.event.addListener(this.marker, MarkerEvent.mouseout, this._onMouseOut)
  }

  public componentDidUpdate(prevProps: Readonly<MarkerProps>) {
    const { options } = this.props
    const prevOptions = prevProps.options

    if (prevOptions !== options) {
      if (prevOptions.altitude !== options.altitude) {
        this.marker.setAltitude(options.altitude!)
      }
      if (prevOptions.clickable !== options.clickable) {
        this.marker.setClickable(options.clickable!)
      }
      if (prevOptions.draggable !== options.draggable) {
        this.marker.setDraggable(options.draggable!)
      }
      if (prevOptions.image !== options.image) {
        this.marker.setImage(options.image!)
      }
      if (prevOptions.map !== options.map) {
        this.marker.setMap(options.map!)
      }
      if (prevOptions.opacity !== options.opacity) {
        this.marker.setOpacity(options.opacity!)
      }
      if (prevOptions.position !== options.position) {
        this.marker.setPosition(options.position)
      }
      if (prevOptions.range !== options.range) {
        this.marker.setRange(options.range!)
      }
      if (prevOptions.title !== options.title) {
        this.marker.setTitle(options.title!)
      }
      if (prevOptions.zIndex !== options.zIndex) {
        this.marker.setZIndex(options.zIndex!)
      }
    }
  }

  public componentWillUnmount() {
    const { markerClusterer } = this.props
    if (markerClusterer) {
      markerClusterer.removeMarker(this.marker)
    }

    daum.maps.event.removeListener(this.marker, MarkerEvent.click, this._onClick)
    daum.maps.event.removeListener(this.marker, MarkerEvent.mouseover, this._onMouseOver)
    daum.maps.event.removeListener(this.marker, MarkerEvent.mouseout, this._onMouseOut)
    this.marker.setMap(null)
  }

  public render() {
    return null
  }

  private _onClick() {
    const { onClick } = this.props
    if (onClick) {
      onClick()
    }
  }

  private _onMouseOut() {
    const { onMouseOut } = this.props
    if (onMouseOut) {
      onMouseOut()
    }
  }

  private _onMouseOver() {
    const { onMouseOver } = this.props
    if (onMouseOver) {
      onMouseOver()
    }
  }
}

enum MarkerEvent {
  click = 'click',
  mouseover = 'mouseover',
  mouseout = 'mouseout'
}
