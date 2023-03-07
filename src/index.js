import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <Auth0Provider
        domain="domain"
        clientId="client-id"
        authorizationParams={{
            redirect_uri: "http://localhost:3000/",
            audience: "audience",
            scope: "read:current_user update:current_user_metadata"
        }}
    >
        <App/>
    </Auth0Provider>
);
