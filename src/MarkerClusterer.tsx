import * as React from 'react'

import { MapContext } from './Map'

export const MarkerClustererContext: React.Context<daum.maps.MarkerClusterer> = React.createContext(
  {} as daum.maps.MarkerClusterer,
)

export interface MarkerClustererProps {
  options: daum.maps.MarkerClustererOptions
}

export class MarkerClusterer extends React.PureComponent<MarkerClustererProps> {
  public static contextType = MapContext
  public context!: React.ContextType<typeof MapContext>

  private readonly markerClusterer: daum.maps.MarkerClusterer

  constructor(props: MarkerClustererProps) {
    super(props)
    const { options } = props
    this.markerClusterer = new daum.maps.MarkerClusterer(options)
  }

  public componentDidMount() {
    const map = this.context
    this.markerClusterer.setMap(map)
  }

  public componentWillUnmount() {
    this.markerClusterer.clear()
    this.markerClusterer.setMap(null)
  }

  public render() {
    return (
      <MarkerClustererContext.Provider value={this.markerClusterer}>
        {this.props.children}
      </MarkerClustererContext.Provider>
    )
  }
}
