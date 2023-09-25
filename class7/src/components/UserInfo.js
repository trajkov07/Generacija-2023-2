// import { User2Context } from "../App";
import { User2Context } from "../uttils/User2Context";
import React from "react";

export const UserInfo = () => {
  const context = React.useContext(User2Context);

  return (
    <div>
      <hr />
      Information about logged in user
      <p>Theme used: {context.theme}</p>
      <p>Font used: {context.font}</p>
      <p>Role: {context.role}</p>
    </div>
  );
};
