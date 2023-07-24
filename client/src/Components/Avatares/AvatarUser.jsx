import React from 'react';
import Avatar from 'react-avatar';
import avatar1 from '../../Img/avatar1.png'; // Ruta a la imagen del avatar 1
import { useSelector } from 'react-redux';


function AvatarUser() {
  const avatarSize = 50; // Tamaño del avatar en píxeles
  const user = useSelector((state) => state.user);
  const selectedAvatar = user.avatarName || avatar1; // Cambia esto para seleccionar el avatar deseado

  return (
    
    <Avatar
    
      size={avatarSize}
      round
      src={selectedAvatar}
    />
  );
}

export default AvatarUser;
