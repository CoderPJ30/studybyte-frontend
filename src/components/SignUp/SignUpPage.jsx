import React from "react";
import { Logo } from "../common/Logo";
import { SignUpForm } from "./SignUpForm";

const SignUpPage = () => {
  return (
    <main className="flex relative flex-col items-center justify-center w-full h-screen bg-zinc-900">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcaa09580c6f13aba36816ea0f9ebdc9745f45c1"
        className="object-cover absolute top-0 left-0 size-full"
        alt="Library background"
      />
      <Logo />
      <SignUpForm />
    </main>
  );
};

export default SignUpPage;
