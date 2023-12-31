/*import React from "react";
import Layout from "./../components/Layout";
import { Form, Col, Row, Input, TimePicker, message ,DatePicker } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import moment from 'moment';

const ApplyDoctor = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // handel form
  const handleFinish = async (values) => {
    console.log(values)
    console.log(user)
    console.log(values.timing[0])
          
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/apply-doctor",
        {
          ...values,
          userId: user._id,
          timing: [
            moment(values.timing[0]).format("HH:mm"),
            moment(values.timing[1]).format("HH:mm"),
          ],
        },

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  return (
    <Layout>
      <h1 className="test-center">Apply Doctor</h1>
      <Form layout="vertical" onFinish={handleFinish} className="m-3">
        <h5 >Personal Details :</h5>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="First Name"
              name="firstName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Last Name"
              name="lastName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text"  placeholder="your last name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Phone Nmber"
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your phone number" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your email address" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Website"
              name="website"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your website" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Address"
              name="address"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your cabine address" />
            </Form.Item>
          </Col>

          <h5 className="">Personal Details :</h5>

          <Form.Item
            label="Specialization"
            name="specialization"
            required
            rules={[{ required: true }]}
          >
            <Input type="text" placeholder="your specialization" />
          </Form.Item>
          <Form.Item
            label="Experience"
            name="experience"
            required
            rules={[{ required: true }]}
          >
            <Input type="text" placeholder="your experience" />
          </Form.Item>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Fees Per Consultation"
              name="feesPerConsultation"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your fees" />
            </Form.Item>
          </Col>
           <Col xs={24} md={24} lg={8}>
            <Form.Item label="Date" name="date" required>
              <DatePicker/>
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Timings" name="timing" required>
              <TimePicker.RangePicker format="hh:mm" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
            <button className="btn btn-primary form-btn" htmltype="submit">
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default ApplyDoctor;*/

import React from "react";
import { Form, Col, Row, Input, TimePicker, message, DatePicker, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import moment from 'moment';

import Layout from "../components/Layout";

const ApplyDoctor = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form submission
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());

      const res = await axios.post(
        "/api/v1/user/apply-doctor",
        {
          ...values,
          userId: user._id,
          timing: [
            moment(values.timing[0]).format("HH:mm"),
            moment(values.timing[1]).format("HH:mm"),
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());

      if (res.data.success) {
        message.success(res.data.message);
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };

  return (
    <Layout>
      <h1 className="text-center">Apply Doctor</h1>
      <Form layout="vertical" onFinish={handleFinish} className="m-3">
        <h5>Personal Details:</h5>
        <Row gutter={20}>
          <Col xs={24} md={8} lg={8}>
            <Form.Item
              label="First Name"
              name="firstName"
              required
              rules={[{ required: true, message: "Please enter your first name" }]}
            >
              <Input placeholder="Your first name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={8} lg={8}>
            <Form.Item
              label="Last Name"
              name="lastName"
              required
              rules={[{ required: true, message: "Please enter your last name" }]}
            >
              <Input placeholder="Your last name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={8} lg={8}>
            <Form.Item
              label="Phone Number"
              name="phone"
              required
              rules={[{ required: true, message: "Please enter your phone number" }]}
            >
              <Input type="text" placeholder="Your phone number" />
            </Form.Item>
          </Col>
          <Col xs={24} md={8} lg={8}>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[
                { required: true, message: "Please enter your email address" },
                { type: "email", message: "Please enter a valid email address" }
              ]}
            >
              <Input type="text" placeholder="Your email address" />
            </Form.Item>
          </Col>
          <Col xs={24} md={8} lg={8}>
            <Form.Item
              label="Website"
              name="website"
              required
              rules={[{ required: true, message: "Please enter your website" }]}
            >
              <Input type="text" placeholder="Your website" />
            </Form.Item>
          </Col>
          <Col xs={24} md={8} lg={8}>
            <Form.Item
              label="Address"
              name="address"
              required
              rules={[{ required: true, message: "Please enter your cabin address" }]}
            >
              <Input type="text" placeholder="Your cabin address" />
            </Form.Item>
          </Col>
        </Row>

        <h5>Professional Details:</h5>
        <Row gutter={20}>
          <Col xs={24} md={8} lg={8}>
            <Form.Item
              label="Specialization"
              name="specialization"
              required
              rules={[{ required: true, message: "Please enter your specialization" }]}
            >
              <Input type="text" placeholder="Your specialization" />
            </Form.Item>
          </Col>
          <Col xs={24} md={8} lg={8}>
            <Form.Item
              label="Experience"
              name="experience"
              required
              rules={[{ required: true, message: "Please enter your experience" }]}
            >
              <Input type="text" placeholder="Your experience"/>
            </Form.Item>
          </Col>
          <Col xs={24} md={8} lg={8}>
            <Form.Item
              label="Fees Per Consultation"
              name="feesPerConsultation"
              required
              rules={[{ required: true, message: "Please enter the fees per consultation" }]}
            >
              <Input type="text" placeholder="Fees per consultation" />
            </Form.Item>
          </Col>
          <Col xs={24} md={8} lg={8}>
            <Form.Item label="Date" name="date" required>
              <DatePicker />
            </Form.Item>
          </Col>
          <Col xs={24} md={8} lg={8}>
            <Form.Item label="Timings" name="timing" required>
              <TimePicker.RangePicker format="HH:mm" />
            </Form.Item>
          </Col>
          
          <Col xs={32} md={8} lg={8} >
            <Button type="primary" htmlType="submit" >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default ApplyDoctor;