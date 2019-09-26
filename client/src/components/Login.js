import React, { useEffect, useGlobal } from 'reactn';
import { useFeathers } from 'figbird';
import Button from 'react-bootstrap/Button';

const Login = () => {
  const [user, setUser] = useGlobal('user');
  const feathers = useFeathers();

  useEffect(() => {
    feathers.reAuthenticate().then((user) => {
      setUser(user.user);
    }).catch((error) => {
      console.log('oh no!', error);
    });
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Button href="http://localhost:3030/oauth/google" variant="danger">Login with Google</Button>
    </div>
  );
};

export default Login;