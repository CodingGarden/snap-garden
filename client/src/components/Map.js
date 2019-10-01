import React, { useState, useEffect } from 'reactn';
import ReactMapGL, { Marker } from 'react-map-gl';
import { useFeathers } from 'figbird';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

import useLocation from '../hooks/useLocation';
import FileUpload from './FileUpload';

const Map = () => {
  const feathers = useFeathers();
  const location = useLocation();
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 31.9742044,
    longitude: -49.25875,
    zoom: 2,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    if (location) {
      setViewport((vp) => ({
        ...vp,
        ...location,
        zoom: 8,
      }));
    }
  }, [location, setViewport]);

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">🌱📸 SnapGarden 📸🌱</Navbar.Brand>
        <div className="navbar-buttons">
          <FileUpload />
          <Button
            onClick={() => {
              feathers.logout();
              window.location.href = '/';
            }}
            variant="danger"
          >
            Logout
          </Button>
        </div>
      </Navbar>
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}
        {...viewport}
        onViewportChange={(vp) => setViewport(vp)}
      >
        {location ? (
          <Marker
            latitude={location.latitude}
            longitude={location.longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <span style={{ fontSize: `${viewport.zoom * 0.5}rem` }}>📸</span>
          </Marker>
        ) : null}
      </ReactMapGL>
    </>
  );
};

export default Map;


