// import React, { useState } from "react";

// const initialState = {
//   name: "",
//   email: "",
//   password: "",
//   nameError: "",
//   emailError: "",
//   passwordError: "",
// };
// export const ValidationForm = () => {
//   const [state, setState] = useState(initialState);

//   const handleChange = (event) => {
//     const isCheckbox = event.target.type === "checkbox";
//     setState({
//       [event.target.name]: isCheckbox
//         ? event.target.checked
//         : event.target.value,
//       // nameError: "",
//       // emailError: "",
//       // passwordError: "",
//     });
//   };

//   const validate = () => {
//     // let nameError = "";
//     let emailError = "";
//     // let passwordError = "";

//     if (!state.email.includes("@")) {
//       emailError = "Invalid Email";
//     }
//     if (emailError) {
//       setState({ emailError });
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const isValid = validate();
//     if (isValid) {
//       console.log(state);
//       // clear form
//       setState(initialState);
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <input
//           name="Name"
//           placeholder="Name"
//           value={state.name}
//           onChange={handleChange}
//         />
//         <div style={{ fontSize: 12, color: "red" }}>{state.nameError}</div>
//       </div>
//       <div>
//         <input
//           name="Email"
//           placeholder="Email"
//           value={state.email}
//           onChange={handleChange}
//         />
//         <div style={{ fontSize: 12, color: "red" }}>{state.emailError}</div>
//       </div>
//       <div>
//         <input
//           type="Password"
//           name="Password"
//           placeholder="Password"
//           value={state.password}
//           onChange={handleChange}
//         />
//         <div style={{ fontSize: 12, color: "red" }}>{state.passwordError}</div>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};

export const ValidationForm = () => {
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    setState({
      ...state,
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
      nameError: "",
      emailError: "",
      passwordError: "",
    });
  };

  const validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (state.name.trim() === "") {
      nameError = "Name is required";
    }

    if (!state.email.includes("@")) {
      emailError = "Invalid Email";
    }

    if (state.password.length < 6) {
      passwordError = "Password must be at least 6 characters long";
    }

    if (nameError || emailError || passwordError) {
      setState({ nameError, emailError, passwordError });
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      console.log(state);
      // clear form
      setState(initialState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="name"
          placeholder="Name"
          value={state.name}
          onChange={handleChange}
        />
        <div style={{ fontSize: 12, color: "red" }}>{state.nameError}</div>
      </div>
      <div>
        <input
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
        />
        <div style={{ fontSize: 12, color: "red" }}>{state.emailError}</div>
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <div style={{ fontSize: 12, color: "red" }}>{state.passwordError}</div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
