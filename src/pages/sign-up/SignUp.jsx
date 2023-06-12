import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const from = location.state?.form?.pathname || "/";

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        updateUserProfile(data.name, data.photo_url)
          .then(() => {
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                name: data.name,
                email: data.email,
                photoUrl: data.photo_url,
                role: "student",
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  navigate(from, { replace: true });
                }
              });
          })
          .catch((error) => {
            console.log(error);
          });
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
      .then((result) => {
        const user = result.user;
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            role: "student",
          }),
        })
          .then((res) => res.json())
          .then(() => navigate(from, { replace: true }));
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex min-h-screen items-center justify-center gap-x-32"
      >
        <div>
          <h1 className="mb-8 text-center text-9xl font-extrabold">Sign Up!</h1>
          <p className="text-center text-2xl text-gray-700">
            Hi there, It's free please enter your details
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-2xl">
          <label className="mb-2 block text-xl" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="mb-2 w-full border px-2 py-1 text-xl focus:outline-none"
            placeholder="Enter Full Name"
          />
          {errors.name && (
            <span className="mb-4 text-lg font-bold text-red-600">
              *Name is required
            </span>
          )}
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
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).+$/,
                message:
                  "Password must contain 1 uppercase, 1 lowercase, 1 number, 1 special character",
              },
            })}
            className="mb-4 w-full border px-2 py-1 text-xl focus:outline-none"
            placeholder="Enter Password"
          />
          {errors.password && (
            <span className="mb-4 text-lg font-bold text-red-600">
              {errors.password.message}
            </span>
          )}
          <label className="mb-2 block text-xl" htmlFor="confirm">
            Confirm Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            {...register("confirm_password", {
              required: "*Confirm Password is required",
              validate: (pass) => {
                if (watch("password") != pass) {
                  return "Your passwords don't match";
                }
              },
            })}
            className="mb-4 w-full border px-2 py-1 text-xl focus:outline-none"
            placeholder="Confirm Password"
          />
          {errors.confirm_password && (
            <span className="mb-4 text-lg font-bold text-red-600">
              {errors.confirm_password.message}
            </span>
          )}

          <p
            onClick={showPasswordHandle}
            className="mb-4 cursor-pointer text-pink-800 underline"
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </p>

          <label className="mb-2 block text-xl" htmlFor="photo_url">
            Photo Url
          </label>
          <input
            type="url"
            {...register("photo_url")}
            className="mb-2 w-full border px-2 py-1 text-xl focus:outline-none"
            placeholder="Enter Photo URL"
          />
          <button
            type="submit"
            className="mt-4 w-full rounded-xl border-2 border-secondary bg-secondary px-5 py-2 text-xl font-bold text-white hover:bg-transparent hover:text-secondary"
          >
            Sign Up
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
          <Link to="/login" className="block text-center text-gray-400">
            Already have an account?
            <span className="ml-1 font-bold text-black">Login now</span>
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignUp;
