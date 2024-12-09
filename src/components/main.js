import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Box from '@mui/material/Box';

// Custom Location Marker Component
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
      map.setView(position, 13);

      // Cleanup function to remove marker when component unmounts
      return () => {
        map.removeLayer(marker);
      };
    }
  }, [position, map]);

  return null;
};

const Main = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

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
          setError(err.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  // Add global styles for the custom marker
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
    <Box
        sx={{
            width: '100%',
            height:750,
            maxHeight:'75vh',
            overflow: 'hidden',
            border: '1px solid #ccc',
        }}
    >
      {location ? (
        <MapContainer
          center={location}
          zoom={10}
          style={{ width: '100%', height: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetMap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
                <LocationMarker position={location}>
                </LocationMarker>
            </MapContainer>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>Loading location...</div>
      )}
    </Box>
  );
};

export default Main;