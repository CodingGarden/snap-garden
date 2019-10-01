import React, { useRef } from 'react';
import { useMutation } from 'figbird';
import { Button } from 'react-bootstrap';

const FileUpload = () => {
  const inputRef = useRef(null);
  const { create, loading } = useMutation('upload');
  return (
    <>
      <Button
        onClick={() => inputRef.current.click()}
      >
        {
          loading ? 'Loading...' : 'Upload Image'
        }
      </Button>
      <input
        onChange={async () => {
          const reader = new FileReader();
          reader.addEventListener('load', async () => {
            const image = reader.result.slice(22);
            const result = await create({ image });
            console.log(result);
          }, false);
          reader.readAsDataURL(inputRef.current.files[0]);
        }}
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
      />
    </>
  );
};

export default FileUpload;
