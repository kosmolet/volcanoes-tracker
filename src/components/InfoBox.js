import React from "react";

const InfoBox = ({ info }) => {
  return (
    <div className="info-box">
      <h3>Event Details</h3>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default InfoBox;
