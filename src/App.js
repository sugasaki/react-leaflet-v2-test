import Leaflet from 'leaflet'
import React, { Component, StrictMode } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import SimpleExample from './components/simple'
import EventsExample from './components/events'
import ViewportExample from './components/viewport'
import VectorLayersExample from './components/vector-layers'
import OtherLayersExample from './components/other-layers'
import ZoomControlExample from './components/zoom-control'
import LayersControlExample from './components/layers-control'
import DraggableExample from './components/draggable-marker'
import BoundsExample from './components/bounds'
import CustomComponentExample from './components/custom-component'
import AnimateExample from './components/animate'
import TooltipExample from './components/tooltip'
import PaneExample from './components/pane'
import WMSTileLayerExample from './components/wms-tile-layer'
import VideoOverlayExample from './components/video-overlay'



Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'


class App extends Component {
  render() {
    return (
      <StrictMode>
        <h1>React-Leaflet examples</h1>
        <h2>Popup with Marker</h2>
        <p>マーカーを表示するサンプル</p>
        <SimpleExample />
        <h2>Events</h2>
        <p>クリックイベントサンプル、クリックで現在位置を取得・表示</p>
        <EventsExample />
        <h2>Viewport</h2>
        <p>クリックで最初のビューポート（表示位置）を再表示、ビューポートの移動イベント検知</p>
        <ViewportExample />
        <h2>Vector layers</h2>
        <p>ベクター図形を描画</p>
        <VectorLayersExample />
        <h2>Other layers</h2>
        <p>LayerGroupとFeatureGroup サンプル</p>
        <OtherLayersExample />
        <h2>Tooltips</h2>
        <p>ツールチップサンプル</p>
        <TooltipExample />
        <h2>Zoom control</h2>
        <p>ズームコントローラーを右上に移動サンプル</p>
        <ZoomControlExample />
        <h2>Layers control</h2>
        <p></p>
        <LayersControlExample />
        <h2>Panes</h2>
        <p>右上にレイヤーコントロールBOXを表示</p>
        <PaneExample />
        <h2>Draggable Marker</h2>
        <p>ドラッグ可能なマーカーを配置</p>
        <DraggableExample />
        <h2>Map view by bounds</h2>
        <p>赤枠の線をクリックする事で、赤枠にバウンズする</p>
        <BoundsExample />
        <h2>List of markers (custom component)</h2>
        <p>マーカーを複数表示するMyMarkersListのサンプル</p>
        <CustomComponentExample />
        <h2>Animate</h2>
        <p>Animate panningにチェック時、クリックすると中心座標が移動する</p>
        <AnimateExample />
        <h2>WMS tile layer</h2>
        <p>L.tileLayer.wms、WMS(Web Map Service)を使う。 </p>
        <WMSTileLayerExample />
        <h2>Video overlay</h2>
        <p>Videoレイヤーを重ねて表示します。IE11では動きません。</p>
        <VideoOverlayExample />
      </StrictMode>
    );
  }
}

export default App;
