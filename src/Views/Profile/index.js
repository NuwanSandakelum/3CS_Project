import React, { useEffect, useState } from "react";
import ProfileCard from "../../components/ProfileCard";

import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile() {
  // store the profile data
  const [users, setUsers] = useState([]);

  // get relevant user data from response
  const { data } = users;
  // router param id
  let { id } = useParams();

  // data fetching relevant to the user
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <ProfileCard profileData={data} />
    </div>
  );
}
