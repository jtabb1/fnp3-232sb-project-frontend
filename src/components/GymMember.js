import React from "react";

export default function GymMember({ gymMember }) {
  return (
    <div>
      <p>Name: {gymMember.name}</p>
      <p>Focus: {gymMember.focus}</p>
    </div>
  );
}
