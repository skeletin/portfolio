import UploadForm from "./UploadForm";

const Upload = () => {
  return (
    <div className="relative flex flex-col items-center h-full w-full text-gray-200 overflow-auto">
      <h1 className="text-xl michroma self-start">Upload File</h1>
      <UploadForm />
    </div>
  );
};

export default Upload;
