![Musma Logo](https://www.musma.net/files/attach/images/157/13123.png)


# react-kakao-maps

카카오 지도 (Daum 지도 Web API) 리액트 컴포넌트


## 목적

[react-google-maps](https://github.com/tomchentw/react-google-maps)도 있고, [react-naver-maps](https://github.com/zeakd/react-naver-maps)도 있는데, [react-kakao-maps](https://github.com/Musma/react-kakao-maps)는 없어서...

**그래서 [무스마 기술연구소](https://www.musma.net/)에서 공유해드립니다.**


## 설치 방법

애플리케이션이 시작되기 전에 Daum 지도 API를 먼저 불러와야 합니다.

[다음 지도 Web API 사용법](http://apis.map.daum.net/web/guide/)

```
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 넣으시면 됩니다.&libraries=services,clusterer"></script>
```

그리고 package.json에 dependencies로 추가합니다.

```
# npm
$ npm Musma/react-kakao-maps#0.0.1 --save

# yarn
$ yarn add Musma/react-kakao-maps#0.0.1
```

## 타입스크립트

**타입스크립트** 사용자를 위해 [daum.maps.d.ts](https://github.com/Musma/daum.maps.d.ts) 패키지를 제공합니다.

tsconfig.json의 `compilerOptions.types` 속성에 `daum.maps.d.ts` 패키지를 추가하시면 됩니다.

```
{
  ...,
  "compilerOptions": {
    ...,
    "types": [
      ...,
      "daum.maps.d.ts"
    ]
  }
}
```

## 사용 방법

> [react-google-maps](https://github.com/tomchentw/react-google-maps) 컴포넌트 사용 방법과 비슷합니다.

```
import { Map, Marker, MarkerClusterer, Polyline } from 'react-kakao-maps'

...

render() {
  return (
    <React.Fragment>
      ...

      {/* 모든 지도 요소 컴포넌트들은 반드시 DOM 구조상 `Map`의 자손이어야 합니다. */}
      <Map options={{ ... }}>
        ...

        {/* 그냥 마커는 이렇게 */}
        <Marker options={{ ... }} />

        {/* 마커 클러스터링 기능 사용하려면 이렇게 */}
        <MarkerClusterer options={{ ... }}>
          <Marker options={{ ... }} />
        </MarkerClusterer>
        
        {/* 나머지도 동일합니다. */}
        <Polyline options={{ ... }} />
      </Map>
    </React.Fragment>
  )
}
```


## 제공되는 컴포넌트

- [ ] AbstractOverlay
- [x] Circle
- [x] CustomOverlay
- [ ] Ellipse
- [ ] InfoWindow
- [x] Map
- [x] Marker
- [x] MarkerClusterer
- [x] Polygon
- [x] Polyline
- [x] Rectangle
- [ ] 기타...


## 이슈/결함

- [GitHub 이슈](https://github.com/Musma/react-kakao-maps/issues)에 등록해주세요.
- 수정해서 Pull Request까지 주시면 더 좋습니다.


## 기여하기

모든 컴포넌트를 100% 다 만들지는 못했습니다.
필요한 부분을 보완해서 Pull Request를 보내주시면 같이 잘 쓰도록 하겠습니다.


## 저작권과 라이선스

- 카카오 지도 API는 카카오 소유입니다.
- MIT 라이선스로 제공되니 알아서 잘 쓰시고, 웬만하면 여기에 공유해서 같이 쓰도록 합시다.
