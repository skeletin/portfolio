import { CircleLoader, FadeLoader } from "react-spinners";

const AppLoader = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <FadeLoader color="white" />
    </div>
  );
};

export default AppLoader;
