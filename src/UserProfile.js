import { useParams } from "react-router-dom";

import UserDetails from "./UserDetails";
import Map from "./Map";
import useGetUser from "./Hookes/useGetUser";

export default function UserProfile() {
  const { id } = useParams();

  const { user } = useGetUser(id); 

  return user && id ? (
    <>
      <Map user={user} />
      <UserDetails userData={user} /> 
    </>
  ) : null;
}
