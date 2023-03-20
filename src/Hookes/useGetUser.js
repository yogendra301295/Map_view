import { useEffect, useState } from "react";

export default function useGetUser(userId) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userId) return;

    (async () => {
      let userData;
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }

      setUser(userData);
    })();
  }, [userId]);

  return { user };
}
