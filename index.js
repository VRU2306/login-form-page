import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "./components/form";
import User from "./validator";

const initState = {
  email: "",
  password: "",
  cPassword: "",
  errors: {}
};

const App = () => {
  const [state, setState] = useState(initState);

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    User.validate(state)
      .then(data => {
        alert(" SUCCESS!!!YOU WILL GET AN EMAIL NOTIFICATION");
        setState(initState);
      })
      .catch(errors => {
        setState({ ...state, errors });
      });
  };

  const handleDirty = e => {
    // Handle Validation on touch

    const { name, value } = e.target;

    const isValid = User[name].validate(value, {
      verbose: true,
      values: state
    });

    if (isValid !== true) {
      setState({ ...state, errors: { ...state.errors, [name]: isValid } });
    } else {
      setState({ ...state, errors: { ...state.errors, [name]: undefined } });
    }
  };

  return (
    <div>
      <Form
        {...state}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleDirty={handleDirty}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
