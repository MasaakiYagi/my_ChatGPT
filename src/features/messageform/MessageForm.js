import React, { useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./MessageForm.css";

const MessageForm = ({ value, handleChange, handleSubmit, handleKeyDown }) => {
  const textAreaRef = useRef(null);

  return (
    <form className="sendmessage-container" onSubmit={handleSubmit}>
      <textarea
        id="input-field"
        placeholder="何でも聞いてくださいよ"
        value={value}
        ref={textAreaRef}
        onChange={(evt) => handleChange(evt.target.value)}
        onKeyDown={handleKeyDown}
        style={{ height: textAreaRef.current?.scrollHeight || "auto" }}
      ></textarea>
      <button className="submit-button" type="submit">
        <FaPaperPlane className="icon"></FaPaperPlane>
      </button>
    </form>
  );
};

export default MessageForm;
