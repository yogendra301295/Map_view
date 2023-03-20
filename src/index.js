import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import "leaflet/dist/leaflet.css";
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
/>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Auth0Provider
      domain="dev-x63uxfqc83trcnoe.us.auth0.com"
      clientId="rzcQnaQQGnxljMDFG91G1bVha1tEEhgY"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);

<script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script>;

reportWebVitals();
