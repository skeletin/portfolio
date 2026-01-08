import HomeLayout from "../../layouts/HomeLayout";
import title from "../../svgs/title.svg";

const Home = () => {
  return (
    <HomeLayout>
      <div className="flex flex-col items-center  justify-center w-full h-full bg-transparent text-3xl text-white">
        <div>
          <img src={title} />
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
