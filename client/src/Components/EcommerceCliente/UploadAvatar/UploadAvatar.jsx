import { useRef, useEffect } from 'react';

function UploadAvatar({avatarName , setavatarName}) {
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
        setavatarName(
         result.data.info.files[0].uploadInfo.secure_url
        )
      }
    );
  }, []);

  const openWidget = (e) => {
    e.preventDefault();
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

export default UploadAvatar;