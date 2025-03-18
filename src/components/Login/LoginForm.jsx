import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import apiCall from "../../api/api.js";
import UserContext from "../../context/UserContext.js";
import { showSuccessToast, showErrorToast } from "../../utils/toast.js";

export const LoginForm = () => {
  const [email, setEmail] = useState("pj@gmail.com");
  const [password, setPassword] = useState("Pj@pass30");

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apiCall("/auth/login", {
        method: "POST",
        body: { email, password },
      });

      if (response) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.data));
        setUser(response.data);
      }

      showSuccessToast("Logged in successfully!");
      navigate("/home");
    } catch (error) {
      console.error(error);
      showErrorToast(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative px-7 py-5 mt-10 bg-white rounded-xl w-[334px] z-[1] max-md:max-w-[334px] max-md:w-[90%] max-sm:p-4 max-sm:mt-10"
    >
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
        <button
          type="button"
          className="mt-2.5 text-base text-right text-black w-full"
        >
          Forget password?
        </button>
      </div>
      <div className="mb-5">
        <Button type="submit" fullWidth>
          Login
        </Button>
      </div>
      <Link to="/signup" className="text-center text-black">
        Create account
      </Link>
    </form >
  );
};
