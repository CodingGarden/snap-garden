import React, { useGlobal, useState } from 'reactn';
import ReactMapGL, { Marker } from 'react-map-gl';
import { useFeathers } from 'figbird';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

const Map = () => {  
  const feathers = useFeathers();
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <>
      <Navbar bg="dark" fixed="top">
        <Navbar.Brand href="#home">
          🌱📸 SnapGarden 📸🌱
        </Navbar.Brand>
        <Button onClick={() => {
          feathers.logout();
          window.location.href = '/';
        }} variant="danger">Logout</Button>
      </Navbar>
      <ReactMapGL
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