import React from "react";
import UserCard from "../../../components/UserCard";

export default function Users(props) {
  const { userData } = props;

  return (
    <div style={{ display: "flex" }}>
      {userData?.map((val, key) => {
        return (
          <div>
            <UserCard
              key={key}
              id={val.id}
              firstName={val.first_name}
              email={val.email}
              avatar={val.avatar}
            />
          </div>
        );
      })}
    </div>
  );
}
