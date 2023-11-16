 import React, { useState } from "react";
 import ReactDOM from "react-dom/client";
 import "./index.css";
 import App from "./App";

 import reportWebVitals from "./reportWebVitals";

const Root = () => {
  const [isSignUpClicked, setSignUpClicked] = useState(false);

  const handleSignUpClick = () => {
    setTimeout(() => {
      setSignUpClicked(true);
    }, 500);
  };

  return (
    <React.StrictMode>
      <App
        isSignUpClicked={isSignUpClicked}
        onSignUpClick={handleSignUpClick}
      />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);

reportWebVitals();
