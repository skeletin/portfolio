import Skeletin from "../../../svgs/Skeletin";

const AdminResourcesBackground = () => {
  return (
    <div className="absolute flex justify-center items-center  inset-0 overflow-hidden">
      <div
        className="absolute h-screen w-full
                       [background-image:radial-gradient(circle,gray_1px,transparent_1px)] 
                       [background-size:50px_50px]"
      />
      <Skeletin className="absolute scale-170 opacity-60" />
    </div>
  );
};

const AdminResources = ({ children }) => {
  return (
    <section className="relative h-full flex flex-1 border-l border-gray-500 p-10">
      <AdminResourcesBackground />
      {children}
    </section>
  );
};

export default AdminResources;
