import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const from = location.state?.form?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const showPasswordHandle = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => navigate(from, { replace: true }))
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex min-h-screen items-center justify-center gap-x-32"
      >
        <div>
          <h1 className="mb-8 text-center text-9xl font-extrabold">Login!</h1>
          <p className="text-center text-2xl text-gray-700">
            Welcome Back! Please enter your details
          </p>
        </div>
        <div className="w-1/3 rounded-2xl bg-white p-6 shadow-2xl">
          <label className="mb-2 block text-xl" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="mb-2 w-full border px-2 py-1 text-xl focus:outline-none"
            placeholder="Enter Email"
          />
          {errors.email && (
            <span className="mb-4 text-lg font-bold text-red-600">
              {errors.email.message}
            </span>
          )}
          <label className="mb-2 block text-xl" htmlFor="password">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
            className="mb-4 w-full border px-2 py-1 text-xl focus:outline-none"
            placeholder="Enter Password"
          />
          {errors.password && (
            <span className="mb-4 text-lg font-bold text-red-600">
              *Password is required
            </span>
          )}

          <p
            onClick={showPasswordHandle}
            className="mb-4 cursor-pointer text-pink-800 underline"
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </p>

          <button
            type="submit"
            className="mt-4 w-full rounded-xl border-2 border-secondary bg-secondary px-5 py-2 text-xl font-bold text-white hover:bg-transparent hover:text-secondary"
          >
            Login
          </button>
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="my-4 w-full rounded-xl border-2 border-secondary px-5 py-2 text-xl font-semibold text-slate-500"
          >
            <img
              className="mr-2 inline h-8 w-8"
              src="https://img.icons8.com/?size=512&id=17949&format=svg"
              alt="google"
            />
            Sign in with Google
          </button>
          <Link to="/sign-up" className="block text-center text-gray-400">
            Don't have an account?
            <span className="ml-1 font-bold text-black">Sign up for free</span>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
