import React from "react";
import "../styles/RegisterStyless.css";
import { Form, Button, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Form handler
  const onFinishHandler = async (values) => {
    console.log("form values", values);
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("register successfully ");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("somethin went wrong");
    }
  };

  return (
    <div className="form-container">
      <Form
        layout="vertical"
        onFinish={onFinishHandler}
        className="register-form"
      >
        <h3 className="text-center">Register form</h3>

        <Form.Item label="First Name" name="firstName">
          <Input type="text" required />
        </Form.Item>

        <Form.Item label="Last Name" name="lastName">
          <Input type="text" required />
        </Form.Item>

        <Form.Item label="Numero" name="number">
          <Input type="number" required />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>

        <Link to="/login" className="ms-2">
          Already user login here{" "}
        </Link>
        <Button className="btn btn-primary" htmlType="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
