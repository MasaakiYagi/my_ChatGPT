import React from "react";
import "./Message.css";

const Message = ({ who, content }) => (
  <div className={`message ${who}`}>
    <p>
      <strong>{who + ":"}</strong>
    </p>
    <p>{content}</p>
  </div>
);
export default Message;
