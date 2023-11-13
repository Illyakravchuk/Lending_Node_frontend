import React from "react";
import "./App.css";
import useLoginForm from "./useLoginForm";

function App({ isSignUpClicked, onSignUpClick }) {
  const {
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
    togglePasswordVisibility,
  } = useLoginForm(isSignUpClicked, onSignUpClick);

  return (
    <div className={`App ${fadeIn ? "fade-in" : ""}`}>
      <div id='container'>
        <div id='content'>
          <header>
            <img src='./icons/logo.svg' alt='' />
          </header>
          <div class='row'>
            <div class='col'>
              <div id='left-panel'>
                <img src='./icons/Group 54.svg' alt='' />
                <img id='rotate-allipse' src='./icons/Group 55.svg' alt='' />
              </div>
            </div>
            <div class='col'></div>
            <div class='col'>
              <div id='right-panel'>
                <h1>
                  {isSignUpClicked ? "Get Started Now!" : "Welcome Back!"}
                </h1>
                <form onSubmit={handleSubmit}>
                  <div class=' input-group flex-nowrap'>
                    <span class='input-group-text' id='addon-wrapping'>
                      <img src='./icons/account.svg' alt='' />
                    </span>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Login'
                      aria-label='Login'
                      value={login}
                      onChange={(e) => setLogin(e.target.value)}
                    />
                  </div>
                  <div class=' input-group flex-nowrap'>
                    <span class='input-group-text' id='addon-wrapping'>
                      <img src='./icons/lock_svgrepo.com.svg' alt='' />
                    </span>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      class='form-control'
                      placeholder='Password'
                      aria-label='Password'
                      aria-describedby='addon-wrapping'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      class='input-group-text'
                      id='basic-addon2'
                      onClick={togglePasswordVisibility}
                    >
                      <img
                        id='eye-icon'
                        src={
                          passwordVisible
                            ? "./icons/eye.svg"
                            : "./icons/eye_2.svg"
                        }
                        alt=''
                      />
                    </span>
                  </div>
                  {isSignUpClicked ? (
                    <div class=' input-group flex-nowrap'>
                      <span class='input-group-text' id='addon-wrapping'>
                        <img src='./icons/mail.svg' alt='' />
                      </span>
                      <input
                        type='email'
                        class='form-control'
                        placeholder='Email'
                        aria-label='Password'
                        aria-describedby='addon-wrapping'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  ) : null}
                  {isSignUpClicked ? (
                    <div id='checkBoxs'>
                      <div className='form-check form-check-inline' id='worker'>
                        <input
                          type='checkbox'
                          className='form-check-input'
                          id='inlineCheckbox1'
                          value='option1'
                          checked={selectedCheckbox === "option1"}
                          onChange={() => handleCheckboxChange("option1")}
                          onClick={() => handleCheckboxClick("option1")}
                        />
                        <label
                          className='form-check-label'
                          htmlFor='inlineCheckbox1'
                        >
                          Worker
                        </label>
                      </div>
                      <div className='form-check form-check-inline'>
                        <input
                          type='checkbox'
                          className='form-check-input'
                          id='inlineCheckbox2'
                          value='option2'
                          checked={selectedCheckbox === "option2"}
                          onChange={() => handleCheckboxChange("option2")}
                          onClick={() => handleCheckboxClick("option2")}
                        />
                        <label
                          className='form-check-label'
                          htmlFor='inlineCheckbox2'
                        >
                          User
                        </label>
                      </div>
                    </div>
                  ) : (
                    <p id='test_reset'>
                      Forgot your password?{" "}
                      <a href='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheoryandpractice.ru%2Fposts%2F17973-interesnye-fakty-o-kotikakh&psig=AOvVaw2IggdeyI-WdaN9u4TbeT-a&ust=1699916446013000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNiF6fG6v4IDFQAAAAAdAAAAABAE'>
                        Reset
                      </a>
                    </p>
                  )}
                  <button class='sign_in' type='submit'>
                    {isSignUpClicked ? "Sign Up" : "Sign In"}
                  </button>
                </form>
                {isSignUpClicked ? null : (
                  <p id='link_reg'>
                    Don’t have an account?{" "}
                    <a href='#' onClick={handleSignUpLinkClick}>
                      Sign Up
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
