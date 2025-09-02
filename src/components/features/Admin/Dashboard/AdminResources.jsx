import Skeletin from "../../../svgs/Skeletin";

const AdminResources = () => {
  return (
    <section className="relative flex flex-1 border-l border-gray-500">
      <div className="absolute flex justify-center items-center  h-full w-full overflow-hidden">
        <div
          className="absolute h-screen w-full
                       [background-image:radial-gradient(circle,gray_1px,transparent_1px)] 
                       [background-size:50px_50px]"
        />
        <Skeletin className="absolute scale-170 opacity-60" />
      </div>
    </section>
  );
};

export default AdminResources;
