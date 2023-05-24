import React, { useState } from "react";
//import GoogleLogin from "@react-oauth/google";
//import GoogleLogin from '@react-oauth/google/lib/GoogleLogin';
import GoogleLogin from 'react-google-login'

function LogIn0Auth() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

 const handleLogin = () => {
    const provider = new GoogleLogin({
      clientId: "104482747114-bngfs43njp7fvv9c3kbfl78kbens8qin.apps.googleusercontent.com",
      clientSecret: "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",
    });

    provider.login().then((res) => {
      setIsLoggedIn(true);
    });
  };

  return (
    <div>
    {isLoggedIn ? (
      <h1>You are logged in!</h1>
    ) : (
      <button onClick={handleLogin}>Login with Google</button>
    )}
  </div>
);
};

// const responseGoogle = (response) => {
//     console.log(response);
//   }

//   const customButton = ({ onClick }) => (
//     <button onClick={onClick} className="custom-google-button">
//       <span className="button-text">Iniciar sesión con Google</span>
//     </button>
//   );

//   return (
//     <div className='container-form' >
//       {/* <div className='social'>
//       <h1 >INGRESA A NUESTRA RED SOCIAL</h1>
//       <img src={go} className='go'/>
//       </div> */}
//       <GoogleLogin
//         clientId="104482747114-bngfs43njp7fvv9c3kbfl78kbens8qin.apps.googleusercontent.com"
//         //clientSecret="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"
//         render={customButton}
//         buttonText=""
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//         cookiePolicy={'single_host_origin'}
//       />
      
//     </div>
//   )
// }

export default LogIn0Auth
