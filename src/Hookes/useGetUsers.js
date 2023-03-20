import { useEffect, useState } from "react";

export default function useGetUsers() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/"
        );
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }

      setUsers(userData);
    })();
  }, []);

  return { users };
}
