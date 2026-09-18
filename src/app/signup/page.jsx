"use client";
import LoginImage from "@/assets/login.jpg";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="max-w-300 mx-auto mt-10">
      <div className="flex items-center justify-center gap-4 border rounded-lg shadow-md overflow-hidden">
        <div className="p-6 w-120">
          <div className="max-w-md w-full mx-auto space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-accent tracking-tight">
                Create an Account
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Join StudyNook to access exclusive study spaces and features
              </p>
            </div>
            {/* Social Login Buttons */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl hover:border bg-white text-xs font-semibold text-[#1A1209] hover:border-accent/40 transition-all shadow-sm active:scale-[0.98] cursor-pointer"
            >
              <FcGoogle className="text-lg " />
              <span>Continue with Google</span>
            </button>
          </div>
          <hr className="my-5" />
          <Form
            className="flex flex-col gap-4 "
            render={(props) => <form {...props} data-custom="foo" />}
          >
            <TextField isRequired name="name" type="text">
              <Label>Name</Label>
              <Input
                className="placeholder:text-gray-300"
                placeholder="john doe"
              />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input
                className="placeholder:text-gray-300"
                placeholder="john@example.com"
              />
              <FieldError />
            </TextField>
            <TextField isRequired name="imgUrl" type="url">
              <Label>Profile Image URL</Label>
              <Input
                className="placeholder:text-gray-300"
                placeholder="https://example.com/image.jpg"
              />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 6) {
                  return "Password must be at least 6 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[a-z]/.test(value)) {
                  return "Password must contain at least one lowercase letter";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input
                className="placeholder:text-gray-300"
                placeholder="Enter your password"
              />
              <Description className="text-gray-600">
                Must be at least 6 characters with 1 uppercase and 1 lowercase
                letter
              </Description>
              <FieldError />
            </TextField>
            <div className="flex gap-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-accent  text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer mt-2"
              >
                <span>Sign Up</span>
                <FaArrowRight className="text-xs" />
              </button>
            </div>
            <p className="text-center text-xs text-[#7A6B52] pt-2">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-accent hover:underline underline-offset-2"
              >
                Login here
              </Link>
            </p>
          </Form>
        </div>
        <div className="relative">
          <Image
            src={LoginImage}
            alt="Login"
            width={420}
            height={450}
            className="mx-auto"
          />
          <div className="absolute w-full h-full inset-0 bg-accent/90 flex flex-col justify-center p-3">
            <div className="relative z-10 space-y-4 my-auto">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-sm">
                Find Your Ideal Study Haven
              </h2>
              <p className="text-sm text-[#EBE6DC] leading-relaxed">
                Reserve quiet study spaces, private rooms, and collaborative
                hubs with instant booking and seamless access.
              </p>
              <ul className="space-y-2 pt-3">
                <li className="flex items-center gap-2 text-xs font-medium text-[#EBE6DC]">
                  <FaCheckCircle className="text-[#B07D3C]" />
                  <span>Verified high-speed Wi-Fi & quiet zones</span>
                </li>
                <li className="flex items-center gap-2 text-xs font-medium text-[#EBE6DC]">
                  <FaCheckCircle className="text-[#B07D3C]" />
                  <span>Flexible hourly & daily bookings</span>
                </li>
                <li className="flex items-center gap-2 text-xs font-medium text-[#EBE6DC]">
                  <FaCheckCircle className="text-[#B07D3C]" />
                  <span>24/7 dedicated support for members</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
