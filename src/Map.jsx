import React, { useEffect } from 'react';
import useStyle from './hooks/useStyle';
import useScript from './hooks/useScript';
import blaasveldBorder from './blaasveld-border.json';
import willebroekBorder from './willebroek-border.json';

/* global L */

let map;
const borderPolygons = [];

function inverseCoordinates (coords) {
  return [coords[1], coords[0]];
}

function initMap () {
  map = L.map('map', {
    // maxBounds: L.latLngBounds(L.latLng(51.0875149284425, 4.331137681006822), L.latLng(51.026714999965954, 4.442116755302424)),
    // minZoom: 14,
    // maxZoom: 16,
  }).setView([51.05525, 4.3765], 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data & Imagery &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abc',
  }).addTo(map);

  // L.geoJSON(border, { color: 'goldenrod' }).addTo(map);

  L.control.scale().setPosition('bottomright').addTo(map);
  map.zoomControl.setPosition('topright');

  showBorder(true);
}

function showBorder (showBorder) {
  if (!window.L) return;

  borderPolygons[0] = borderPolygons[0] || L.polygon([[[180, -180], [-180, -180], [-180, 180], [180, 180]], willebroekBorder.geometries[0].coordinates[0][0].map(inverseCoordinates)], { color: 'black', fillOpacity: 0.4, stroke: false });
  borderPolygons[1] = borderPolygons[1] || L.polygon([[[180, -180], [-180, -180], [-180, 180], [180, 180]], blaasveldBorder.geometries[0].coordinates[0][0].map(inverseCoordinates)], { color: 'black', fillOpacity: 0.3 });

  if (showBorder) {
    borderPolygons.map(border => border.addTo(map));
  } else {
    borderPolygons.map(border => border.removeFrom(map));
  }
}

export default function Map (props) {
  useStyle('https://unpkg.com/leaflet@1.7.1/dist/leaflet.css');
  useScript('https://unpkg.com/leaflet@1.7.1/dist/leaflet.js', { onLoad: initMap });

  useEffect(() => {
    console.log('Toggling border', props.controls.showBorder);
    showBorder(props.controls.showBorder);
  }, [props.controls]);

  return <div id="map" style={{ zIndex: 50, height: '100vh' }}/>;
}
