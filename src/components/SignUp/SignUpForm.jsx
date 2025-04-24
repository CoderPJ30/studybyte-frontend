import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import apiCall from "../../api/api.js";
import UserContext from "../../context/UserContext.js";
import { showSuccessToast, showErrorToast } from "../../utils/toast.js";

export const SignUpForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      showErrorToast("Confirm password does not match password");
      return;
    }

    try {
      const response = await apiCall("/auth/register", {
        method: "POST",
        body: { fullname, email, password },
      });

      if (response) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.data));
        setUser(response.data);
      }

      showSuccessToast("Resgistered successfully!");
      navigate("/home");
    } catch (error) {
      console.error(error);
      showErrorToast(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative px-7 py-5 mt-7 bg-white rounded-xl w-[400px] z-[1] max-md:max-w-[334px] max-md:w-[90%] max-sm:p-4 max-sm:mt-10"
    >
      <div className="mb-5 max-sm:mb-3">
        <Input
          label="Full name"
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
        />
      </div>
      <div className="mb-5 max-sm:mb-3">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-5 max-sm:mb-3">
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-5 max-sm:mb-3">
        <Input
          label="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <Button type="submit" fullWidth>
          Sign Up
        </Button>
      </div>
      <div className="flex gap-1.5 items-center">
        <p className="text-base text-black">Already a user?</p>
        <Link to="/login" className="text-base font-semibold text-black cursor-pointer">
          Login
        </Link>
      </div>
    </form>
  );
};
