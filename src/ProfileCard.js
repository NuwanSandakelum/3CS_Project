import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileCard(props) {
  const { profileData } = props;

  // navigate pages
  let navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
        style={{
          background: "#2596be",
          color: "#fff",
          padding: "15px 25px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Back
      </button>
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={profileData?.avatar} alt="avatar" width="180px" />
        <div
          style={{
            padding: "20px",
            background: "#FAF9F6",
            borderRadius: "10px",
            margin: "10px",
            width: "400px",
          }}
        >
          <p style={{ paddingBottom: "10px" }}>
            First Name: {profileData?.first_name}
          </p>
          <p style={{ paddingBottom: "10px" }}>
            Last Name: {profileData?.last_name}
          </p>
          <p style={{ paddingBottom: "10px" }}>Email: {profileData?.email}</p>
        </div>
      </div>
    </div>
  );
}
