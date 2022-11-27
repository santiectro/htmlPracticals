import { useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  // axios

  //simple validation
  const isFormValid = () => {
    let isValid = true;

    if (email == "") {
      isValid = false;
      errors.email = "Invalid email";
    } else {
      errors.email = "";
    }

    if (password == "") {
      isValid = false;
      errors.password = "Invalid password";
    } else {
      errors.password = "";
    }

    setErrors({ ...errors });
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      // submit the form
    }
    // console.log(email, password);
    const result = axios.post("http://localhost:3000/login", {
      email,
      password,
    });

    console.log({result})
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <TextInput
          name="email"
          type="text"
          placeholder="Enter email"
          error={errors.email}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextInput
          name="password"
          type="password"
          placeholder="Enter password"
          error={errors.password}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <Button type="submit" label={"Submit"} />
      </form>
    </>
  );
};

export default LoginPage;
