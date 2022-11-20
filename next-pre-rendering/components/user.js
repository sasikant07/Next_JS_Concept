import React from "react";

const User = ({user}) => {
  return (
    <div>
      <h6>Name: {user.name}</h6>
      <h6>Email: {user.email}</h6>
    </div>
  );
};

export default User; 
