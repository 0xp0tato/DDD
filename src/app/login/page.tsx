"use client";

import { ILogin } from "@/interface/login";
import { handleLogin } from "@/lib/login";
import { Form, Button, Input, FormProps } from "antd";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function page() {
  const router = useRouter();
  const onFinish: FormProps<ILogin>["onFinish"] = async (credentials) => {
    const loginResponse = await handleLogin(credentials);

    const jwtToken = loginResponse.data.jwtToken;
    const success = loginResponse.data.success;

    if (success) {
      Cookies.set("token", jwtToken, { expires: 3 });
      router.push("/dashboard");
    }
  };

  const onFinishFailed: FormProps<ILogin>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (Cookies.get("token")) router.push("/dashboard");
  }, []);

  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center bg-gray-100">
      <h1 className="text-7xl font-forte">Dehraduna Dumplings</h1>
      <h2 className="text-5xl">Admin Login</h2>
      <Form
        className="w-full max-w-3xl bg-white p-8 shadow-lg rounded-lg"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item<ILogin>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<ILogin>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <div className="flex justify-center">
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
