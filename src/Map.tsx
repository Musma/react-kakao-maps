import * as React from 'react'

export const MapContext: React.Context<daum.maps.Map> = React.createContext(
  {} as daum.maps.Map,
)

export interface MapProps {
  minLevel?: number
  maxLevel?: number
  options: daum.maps.MapOptions
  onBoundChanged?(map: daum.maps.Map): void
  onCenterChanged?(map: daum.maps.Map): void
  onClick?(e: daum.maps.event.MouseEvent, map: daum.maps.Map): void
  onLoad?(map: daum.maps.Map): void
  onZoomChanged?(map: daum.maps.Map): void
}

interface State {
  map?: daum.maps.Map
}

export class Map extends React.PureComponent<MapProps, State> {
  public state: State = {
    // 주의: 없애면 안 된다.
  }

  constructor(props: MapProps) {
    super(props)
    this.onComponentMount = this.onComponentMount.bind(this)
    this._onBoundChanged = this._onBoundChanged.bind(this)
    this._onCenterChanged = this._onCenterChanged.bind(this)
    this._onClick = this._onClick.bind(this)
    this._onLoad = this._onLoad.bind(this)
    this._onZoomChanged = this._onZoomChanged.bind(this)
  }

  public componentDidUpdate(prevProps: Readonly<MapProps>) {
    const { options: prevOptions } = prevProps
    const { options } = this.props
    const { map } = this.state
    if (map) {
      if (!prevOptions.center.equals(options.center)) {
        map.setCenter(options.center)
      }

      if (prevOptions.mapTypeId !== options.mapTypeId) {
        map.setMapTypeId(options.mapTypeId || daum.maps.MapTypeId.SKYVIEW)
      }

      if (prevProps.maxLevel !== this.props.maxLevel) {
        map.setMaxLevel(this.props.maxLevel!)
      }

      if (prevProps.minLevel !== this.props.minLevel) {
        map.setMinLevel(this.props.minLevel!)
      }
    }
  }

  public componentWillUnmount() {
    const { map } = this.state
    if (map) {
      daum.maps.event.removeListener(
        map,
        MapEvent.bound_changed,
        this._onBoundChanged,
      )
      daum.maps.event.removeListener(
        map,
        MapEvent.center_changed,
        this._onCenterChanged,
      )
      daum.maps.event.removeListener(map, MapEvent.click, this._onClick)
      daum.maps.event.removeListener(
        map,
        MapEvent.zoom_changed,
        this._onZoomChanged,
      )
    }
    delete this.state.map
  }

  public render() {
    const { map } = this.state
    return (
      <div
        ref={this.onComponentMount}
        style={{ height: '100%' }}
      >
        {map ? (
          <MapContext.Provider value={map}>
            {this.props.children}
          </MapContext.Provider>
        ) : null}
      </div>
    )
  }

  private onComponentMount(container: HTMLElement | null) {
    if (container && !this.state.map) {
      daum.maps.load(() => {
        daum.maps.disableHD()
        const map = new daum.maps.Map(container, this.props.options)

        if (this.props.maxLevel) {
          map.setMaxLevel(this.props.maxLevel)
        }

        if (this.props.minLevel) {
          map.setMinLevel(this.props.minLevel)
        }

        daum.maps.event.addListener(
          map,
          MapEvent.bound_changed,
          this._onBoundChanged,
        )
        daum.maps.event.addListener(
          map,
          MapEvent.center_changed,
          this._onCenterChanged,
        )
        daum.maps.event.addListener(map, MapEvent.click, this._onClick)
        daum.maps.event.addListener(
          map,
          MapEvent.zoom_changed,
          this._onZoomChanged,
        )

        this.setState({ map })

        // daum.map.Map 참조 외부로 전달
        this._onLoad(map)
      })
    }
  }

  private _onBoundChanged() {
    const { onBoundChanged } = this.props
    const { map } = this.state
    if (onBoundChanged && map) {
      onBoundChanged(map)
    }
  }

  private _onCenterChanged() {
    const { onCenterChanged } = this.props
    const { map } = this.state
    if (onCenterChanged && map) {
      onCenterChanged(map)
    }
  }

  private _onClick(e: daum.maps.event.MouseEvent) {
    const { onClick } = this.props
    const { map } = this.state
    if (onClick && map) {
      onClick(e, map)
    }
  }

  private _onLoad(map: daum.maps.Map) {
    const { onLoad } = this.props
    if (onLoad) {
      onLoad(map)
    }
  }

  private _onZoomChanged() {
    const { onZoomChanged } = this.props
    const { map } = this.state
    if (onZoomChanged && map) {
      onZoomChanged(map)
    }
  }
}

enum MapEvent {
  bound_changed = 'bound_changed',
  center_changed = 'center_changed',
  click = 'click',
  zoom_changed = 'zoom_changed',
}
