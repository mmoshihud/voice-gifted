import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex min-h-screen items-center justify-center gap-x-32"
    >
      <div>
        <h1 className="mb-8 text-center text-9xl font-extrabold">Login</h1>
        <p className="text-center text-2xl text-gray-700">
          Welcome Back! Please enter your details
        </p>
      </div>
      <div className="rounded-2xl bg-white p-6 shadow-2xl">
        <label className="mb-2 block text-xl" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          name="email"
          className="mb-2 w-full border px-2 py-1 text-xl focus:outline-none"
          placeholder="Enter Email"
        />
        <label className="mb-2 block text-xl" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="mb-4 w-full border px-2 py-1 text-xl focus:outline-none"
          placeholder="Enter Password"
        />
        <input type="checkbox" className="mr-2" />
        <span className="mb-4 text-base">show</span>
        <button
          type="submit"
          className="mt-4 w-full rounded-xl border-2 border-secondary bg-secondary px-5 py-2 text-xl font-bold text-white hover:bg-transparent hover:text-secondary"
        >
          Login
        </button>
        <button
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
  );
};

export default Login;
