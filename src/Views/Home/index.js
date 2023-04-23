import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "./users";

export default function HomePage() {
  // store the response data
  const [users, setUsers] = useState([]);

  // get relevant user data from response
  const { data } = users;

  // data fetching
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          padding: "15px",
          background: "#2596be",
          color: "#fff",
        }}
      >
        USERS LIST
      </h1>
      <h2 style={{ marginTop: "45px", marginLeft: "40px" }}>Users</h2>
      <div style={{ alignItems: "center", margin: "40px" }}>
        <Users userData={data} />
      </div>
    </div>
  );
}
