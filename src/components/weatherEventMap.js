import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Circle } from 'react-leaflet';
import { getSeverityColor } from '../utils/utils';
import L from 'leaflet';

export default function WeatherEventMap({ data }) {
  const { lat, lng } = data.coordinates;
  const circlecolor = getSeverityColor(data.severity);
  const radiusInMeters = data.radius * 1609.34; // Convert miles to meters

  const [mapKey, setMapKey] = useState(0);

  // Force re-render of map with new lat/lng
  useEffect(() => {
    setMapKey(prev => prev + 1);
  }, [data]);

  return (
    <div className="weather-map">
      <MapContainer
        key={mapKey} // Force map re-initialization when data changes
        center={[lat, lng]}
        zoom={10}
        style={{ width: '750px', maxWidth: '90vw', aspectRatio: '1 / 1' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {/* Render the weather circle */}
        {lat && lng && (
          <>
            <Circle
              center={[lat, lng]}
              radius={radiusInMeters}
              color={circlecolor}
              fillOpacity={0.3}
            />
          </>
        )}
      </MapContainer>
    </div>
  );
}
