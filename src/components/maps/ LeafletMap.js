import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Routing from './RoutingMachine';

export default class LeafletMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 37.146615115302716,
      lng: -3.6450997763180313,
      zoom: 13,
      isMapInit: false,
    };
  }

  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true,
    });
  };

  render() {
    const { lat, lng } = this.state;
    const { position } = [lat, lng];
    const { zoom } = this.state;
    const { isMapInit } = this.state;
    return (
      <Map
        className="leaflet-container"
        center={position}
        zoom={zoom}
        ref={this.saveMap}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {isMapInit && <Routing map={this.map} />}
      </Map>
    );
  }
}
