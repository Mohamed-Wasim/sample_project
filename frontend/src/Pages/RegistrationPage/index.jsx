import React, { useState } from "react";
import "./styles.css";
import FormComponent from "../../Components/FormComponent";
import { Form } from "react-bootstrap";
import ButtonComponent from "../../Components/ButtonComponent/Index";
import { handleCreate } from "../../Services/index";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [oUserForm, setUserForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await handleCreate("/user/register", oUserForm);
      if (userData) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
    setUserForm({
      username: "",
      email: "",
      password: "",
    });
  };

  // handleChance FormData
  const handleChange = (e) => {
    setUserForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="Registration_Container">
      <div className="RegistrationUser_container card ">
        <h3 className="text-center">Registration</h3>
        <Form onSubmit={handleSubmit}>
          <FormComponent
            value={oUserForm.username}
            type="text"
            placeholder="Enter the user name"
            label="Name"
            name="username"
            onChange={(e) => handleChange(e)}
            required
          />
          <FormComponent
            value={oUserForm.email}
            type="email"
            placeholder="Enter the user mail"
            label="Email"
            name="email"
            onChange={(e) => handleChange(e)}
            required
          />
          <FormComponent
            value={oUserForm.password}
            type="password"
            placeholder="Enter the user password"
            label="Password"
            name="password"
            onChange={(e) => handleChange(e)}
            required
          />
          <ButtonComponent label="Register" />
        </Form>
      </div>
    </div>
  );
};

export default RegistrationPage;
