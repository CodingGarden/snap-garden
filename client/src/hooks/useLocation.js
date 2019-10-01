import { useEffect, useState } from 'reactn';

const options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0,
};

export default function useLocation() {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    console.log('Getting Position...');

    const onSuccess = ({
      coords: {
        latitude,
        longitude,
      },
    }) => {
      setLocation({
        latitude,
        longitude,
      });
    };

    const onError = (error) => {
      console.error(error);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  }, []);

  return location;
}
