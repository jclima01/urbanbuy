import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();
  const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const auth0ClientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const auth0Audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  const handleRedirect = (redirectUri) => {
    navigate(redirectUri);
  };

  const onRedirectCallback = (appState) => {
    const redirectUri = appState?.returnTo || window.location.pathname;
    handleRedirect(redirectUri);
  };

  return (
    <Auth0Provider
      domain={auth0Domain}
      clientId={auth0ClientId}
      redirectUri={handleRedirect}
      onRedirectCallback={onRedirectCallback}
      auth0Audience={auth0Audience}
    >
      {children}
    </Auth0Provider>
  );
};
export const a = 0;

export default Auth0ProviderWithHistory;
