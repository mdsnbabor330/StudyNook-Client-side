"use client";

import SignUpImage from "@/assets/login.jpg";
import {
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const SignUp = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata.entries());
    console.log("Sign up data:", data);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12 pt-24 sm:pt-28">
      <div className="flex flex-col lg:flex-row items-stretch border border-border rounded-2xl shadow-xl overflow-hidden bg-card">
        {/* Left Side Form */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <div className="w-full space-y-6">
            {/* Header */}
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                Create an Account
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Join StudyNook to access exclusive study spaces and features
              </p>
            </div>

            {/* Social Login */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-border bg-background hover:bg-secondary text-xs sm:text-sm font-semibold text-foreground transition-all shadow-xs active:scale-[0.98] cursor-pointer"
            >
              <FcGoogle className="text-xl" />
              <span>Continue with Google</span>
            </button>
          </div>

          <div className="relative my-6 text-center">
            <hr className="border-border" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-xs text-muted-foreground">
              OR
            </span>
          </div>

          <Form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            render={(props) => <form {...props} />}
          >
            <TextField isRequired name="name" type="text">
              <Label className="text-xs sm:text-sm font-medium text-foreground">
                Name
              </Label>
              <Input
                className="w-full rounded-xl border border-border bg-background p-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="John Doe"
              />
              <FieldError className="text-xs text-red-500 mt-1" />
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
              <Label className="text-xs sm:text-sm font-medium text-foreground">
                Email
              </Label>
              <Input
                className="w-full rounded-xl border border-border bg-background p-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="john@example.com"
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            <TextField isRequired name="imgUrl" type="url">
              <Label className="text-xs sm:text-sm font-medium text-foreground">
                Profile Image URL
              </Label>
              <Input
                className="w-full rounded-xl border border-border bg-background p-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="https://example.com/image.jpg"
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            <TextField
              isRequired
              minLength={6}
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
              <Label className="text-xs sm:text-sm font-medium text-foreground">
                Password
              </Label>
              <Input
                className="w-full rounded-xl border border-border bg-background p-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your password"
              />
              <Description className="text-xs text-muted-foreground mt-1">
                At least 6 characters with 1 uppercase & 1 lowercase
              </Description>
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-semibold shadow-md hover:bg-primary/90 transition-all active:scale-[0.99] cursor-pointer mt-2"
            >
              <span>Register</span>
            </button>

            <p className="text-center text-xs text-muted-foreground pt-3">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-primary hover:underline underline-offset-2"
              >
                Sign in here
              </Link>
            </p>
          </Form>
        </div>

        {/* Right Side Branding (Hidden on mobile, visible on lg) */}
        <div className="relative hidden lg:flex lg:w-1/2 bg-primary">
          <Image
            src={SignUpImage}
            alt="Sign Up"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-30"
          />
          <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-between h-full text-white">
            <div className="space-y-4 my-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight drop-shadow-xs">
                Find Your Ideal Study Haven
              </h2>
              <p className="text-sm text-slate-200 leading-relaxed">
                Reserve quiet study spaces, private rooms, and collaborative
                hubs with instant booking and seamless access.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-200">
                  <FaCheckCircle className="text-[#B07D3C] shrink-0" />
                  <span>Verified high-speed Wi-Fi & quiet zones</span>
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-200">
                  <FaCheckCircle className="text-[#B07D3C] shrink-0" />
                  <span>Flexible hourly & daily bookings</span>
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-200">
                  <FaCheckCircle className="text-[#B07D3C] shrink-0" />
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
