export const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col z-1 justify-center items-center flex-1 w-full mt-4">
      {children}
    </div>
  );
};

export default HomeLayout;
