import React from "react";

const FirebaseErrorMessages = ({ children }) => {
    if(`Firebase: Error (auth/wrong-password).`)
  return <div>{children}</div>;
};

export default FirebaseErrorMessages;
