import React, { useState, useEffect } from 'reactn';
import ReactMapGL, { Marker } from 'react-map-gl';
import { useFeathers } from 'figbird';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

const Map = () => {  
  const feathers = useFeathers();
  const [resizeListening, setResizeListening] = useState(false);
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      })
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
          🌱📸 SnapGarden 📸🌱
        </Navbar.Brand>
        <Button onClick={() => {
          feathers.logout();
          window.location.href = '/';
        }} variant="danger">Logout</Button>
      </Navbar>
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
          <span style={{ fontSize: `${viewport.zoom * 0.5}rem` }}>📸</span>
        </Marker>
      </ReactMapGL>
    </>
  );
};

export default Map;