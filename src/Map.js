import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { NavLink } from "react-router-dom";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import L from "leaflet";

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});

function UserMarker({ marker, index }) {
  const map = useMap();

  return (
    <Marker
      eventHandlers={{
        click: () => {
          map.flyTo([marker.address.geo.lat, marker.address.geo.lng], 5);
        },
      }}
      key={index}
      position={{
        lat: marker.address.geo.lat,
        lng: marker.address.geo.lng,
      }}
      icon={icon}
    >
      <Popup>
        <div className="map-popup">{marker.name}</div>
      </Popup>
    </Marker>
  );
}

function Markers({ users, user }) {
  console.log(user);
  if (user) return <UserMarker marker={user} index={0} />;
  return (
    users?.length > 0 &&
    users?.map((marker, index) => {
      return <UserMarker marker={marker} key={index} />;
    })
  );
}

function SetMapView({ user }) {
  const map = useMap();

  useEffect(() => {
    if (!map || !user) return;

    const { lat, lng } = user?.address?.geo;

    map.flyTo([lat, lng], 5);
  }, [map, user]);

  return null;
}

const Map = ({ users, user }) => {
  return (
    <>
      <NavLink to="/">
        <ArrowLeftIcon color="green.400" m={3} />
      </NavLink>
      <div className="map-container">
        <MapContainer
          center={[21.26605, 79.042499]}
          zoom={10}
          style={{ height: "80vh" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Markers users={users} user={user} />
          {user && <SetMapView user={user} />}
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
