import Leaflet from 'leaflet'
import React, { Component } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import SimpleExample from './components/simple'
import EventsExample from './components/events'

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'


class App extends Component {
  render() {
    return (
      <div>
        SimpleExample
        <SimpleExample />

        EventsExample
        <EventsExample />
      </div>
    );
  }
}

export default App;
