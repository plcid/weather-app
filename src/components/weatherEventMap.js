import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Circle, useMap } from 'react-leaflet';
import { getSeverityColor } from '../utils/utils';
import L from 'leaflet';

const LocationMarker = ({ position }) => {
  const map = useMap();

  // Create custom div icon
  const locationMarker = L.divIcon({
    className: '', 
    html: `<div class="parent-loc"><div class="child-loc"></div></div>`,
    iconSize: [50, 50],
    iconAnchor: [25, 25], // Adjusted to center the marker
    popupAnchor: [0, -25]
  });

  // Automatically add marker to map and center
  useEffect(() => {
    if (position) {
      const marker = L.marker(position, { icon: locationMarker }).addTo(map);

      // Cleanup function to remove marker when component unmounts
      return () => {
        map.removeLayer(marker);
      };
    }
  }, [position, map]);

  return null;
};

export default function WeatherEventMap({ data }) {
  const { lat, lng } = data.coordinates;
  const circlecolor = getSeverityColor(data.severity);
  const radiusInMeters = data.radius * 1609.34; // Convert miles to meters

  const [mapKey, setMapKey] = useState(0);

  // Force re-render of map with new lat/lng
  useEffect(() => {
    setMapKey(prev => prev + 1);
  }, [data]);

  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Check if geolocation is supported
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLocation = [
            position.coords.latitude, 
            position.coords.longitude
          ];
          
          setLocation(currentLocation);
        },
        (err) => {
          console.error("Error getting location:", err);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      
    }
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes breathe {
            0%, 100% {
            transform: scale(1);
            background-color: rgba(27, 132, 255, 0.3);
            }
            50% {
            transform: scale(1.2);
            background-color: rgba(27, 132, 255, 0.15);
            }
        }

        .parent-loc {
            position: relative;
            width: 50px;
            height: 50px;
            background-color: rgba(27, 132, 255, 0.3);
            border-radius: 50%;
            animation: breathe 2s infinite ease-in-out;
        }
        
        .child-loc {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            background-color: #1b84ff;
            border: 4px solid #fff;
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="weather-map">
      <MapContainer
        key={mapKey} // Force map re-initialization when data changes
        center={[lat, lng]}
        zoom={8}
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
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetMap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
            <LocationMarker position={location} />
      </MapContainer>
    </div>
  );
}
