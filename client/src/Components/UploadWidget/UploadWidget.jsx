import { useRef, useEffect } from 'react';

function UploadWidget({dataProducts , setdataProducts}) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dhan4gjbn',
        uploadPreset: 'zzrhgmlq',
      },
      function (error, result) {
        setdataProducts({
          ...dataProducts,
          imageUrl : result?.data.info.files[0].uploadInfo.secure_url
        })
      }
    );
  }, []);

  const openWidget = () => {
    widgetRef.current.open();
  };

  return (
    <button style={{
      backgroundColor:'#ff7f2a',
      border:'none',
      borderRadius:8,
      color:'white',
      padding: 5
    }} onClick={openWidget}>
      Upload
    </button>
  );
}

export default UploadWidget;