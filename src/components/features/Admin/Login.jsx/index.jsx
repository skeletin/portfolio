import Skeletin from "../../../svgs/Skeletin";

const Login = () => {
  return (
    <main className="relative flex justify-center items-center h-full">
      <Skeletin className="absolute border scale-150" />
      <div className="flex justify-center w-full z-1">
        <div className="relative flex flex-col justify-center items-center w-full">
          <form className="flex flex-col text-white h-[20rem] p-5 rounded-2xl  bg-gray-600/20 backdrop-blur-md w-full max-w-[20rem] ">
            <h1 className="michroma">Sign in</h1>
            <h2 className="text-sm mt-4 text-center">
              Please login to Admin Dashboard
            </h2>
            <div className="flex flex-col space-y-4 mt-10">
              <input
                className="p-2 focus:outline-none border-b border-gray-400 text-gray-200"
                placeholder="username"
                required
              />
              <input
                className="p-2 focus:outline-none border-b border-gray-400 text-gray-200"
                type="password"
                placeholder="password"
                required
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
