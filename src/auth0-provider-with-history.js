// import React from 'react';
// import {useNavigate} from 'react-router-dom'
// import {Auth0Provider} from '@auth0/auth0-react'

// const Auth0ProviderWithHistory = ({children}) => {
// const history = useNavigate()
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// const onRedirectCallback = (appState) => {
//     history.push(appState?.return || window.location.pathname);

// }
// return (
//     <Auth0Provider
//         domain={domain}
//         clientId={clientId}
//         onRedirectCallback={onRedirectCallback}
//         >
//         {children}
//         </Auth0Provider>
// );

// };
// export default Auth0ProviderWithHistory;