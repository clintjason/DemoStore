import React, { useState } from "react";

interface Props {
  content: string;
  type: string;
}

const Message: React.FC<Props> = ({ content, type }) => {
  const [showMessage, setShowMessage] = useState(true);

  const handleClose = () => {
    setShowMessage(false);
  };

  if (!showMessage) {
    return null;
  }

  return (
    <div className={"message " + type}>
      <div className="message-content">{content}</div>
      <i className="fa fa-times fax2 close-button" onClick={handleClose} aria-hidden="true"></i>
    </div>
  );
};

export default Message;