import { useState, useEffect } from "react";

const useLoginForm = (isSignUpClicked, onSignUpClick) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    setFadeIn(true);

    const timeoutId = setTimeout(() => {
      setFadeIn(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [isSignUpClicked]);

  const handleCheckboxChange = (value) => {
    if (selectedCheckbox === value) {
      setSelectedCheckbox(null);
    } else {
      setSelectedCheckbox(value);
    }
  };

  const handleCheckboxClick = (value) => {
    if (selectedCheckbox && selectedCheckbox !== value) {
      setSelectedCheckbox(null);
    } else {
      setSelectedCheckbox(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted!"); //just for test
  };

  const handleSignUpLinkClick = () => {
    onSignUpClick();
    clearFormFields();
  };

  const clearFormFields = () => {
    setLogin("");
    setPassword("");
    setEmail("");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return {
    fadeIn,
    selectedCheckbox,
    login,
    password,
    email,
    passwordVisible,
    setLogin,
    setPassword,
    setEmail,
    handleCheckboxChange,
    handleCheckboxClick,
    handleSubmit,
    handleSignUpLinkClick,
    clearFormFields,
    togglePasswordVisibility,
  };
};

export default useLoginForm;
