import React from "react";

import { useNavigate } from "react-router-dom";

export default function UserCard(props) {
  const { id, firstName, email, avatar } = props;

  // navigate pages
  let navigate = useNavigate();

  return (
    <>
      <div
        style={{
          padding: "20px",
          background: "#FAF9F6",
          margin: "10px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`/profile/${id}`);
        }}
      >
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <p style={{ padding: "10px 0px" }}>{firstName}</p>
        <p>{email}</p>
      </div>
    </>
  );
}
