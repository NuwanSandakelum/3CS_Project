import React from "react";


export default function UserCard(props) {
  const { firstName, email, avatar } = props;

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
