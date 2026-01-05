import { useEffect, useState } from "react";
import Skeletin from "../../../svgs/Skeletin";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../../endpoints/admin/AdminEndpoints";
import { useNavigate } from "react-router";
import useAdmin from "../../../../hooks/useAdmin";
import AppLoader from "../../../loaders/AppLoader";

const Login = () => {
  const { data: admin, isLoading } = useAdmin();

  const [credentials, setCredentials] = useState({
    user: {
      username: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: () => navigate("/admin/dashboard"),
  });

  const handleLogin = (e) => {
    e.preventDefault();
    mutate(credentials);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      user: {
        ...prev.user,
        [name]: value,
      },
    }));
  };

  useEffect(() => {
    if (admin) navigate("/admin/dashboard");
  }, [admin, navigate]);
  console.log("hi");

  if (isLoading) return <AppLoader />;

  return (
    <main className="relative flex justify-center items-center h-full">
      <Skeletin className="absolute border scale-180" />
      <div className="flex justify-center w-full z-1">
        <div className="relative flex flex-col justify-center items-center w-full">
          <form
            onSubmit={handleLogin}
            className="flex flex-col text-white h-[20rem] p-5 rounded-2xl  bg-gray-600/20 backdrop-blur-md w-full max-w-[20rem] "
          >
            <h1 className="michroma">Sign in</h1>
            <h2 className="text-sm mt-4 text-center font-light">
              Please login to Admin Dashboard
            </h2>
            <div className="flex flex-col space-y-4 mt-10">
              <input
                className="p-2 focus:outline-none border-b border-gray-400 text-gray-200 font-thin"
                placeholder="username"
                name={"username"}
                value={credentials.user.username}
                required
                onChange={handleChange}
              />
              <input
                className="p-2 focus:outline-none border-b border-gray-400 text-gray-200 font-thin"
                type="password"
                placeholder="password"
                name={"password"}
                value={credentials.user.password}
                required
                onChange={handleChange}
              />
              <input
                className="w-full mt-4 bg-black/40 rounded-xl p-2 text-sm  text-gray-200 font-thin cursor-pointer focus:outline-none hover:bg-black transition-all duration-300"
                type="submit"
                value={"Login"}
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
