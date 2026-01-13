import { TiDelete } from "react-icons/ti";
import { LuUpload } from "react-icons/lu";
import { useRef } from "react";

const UploadFileField = (props) => {
  const {
    idSchema,
    schema,
    required,
    formData,
    onChange,
    rawErrors = [],
  } = props;

  const fileInputRef = useRef(null);

  const handleRemoveFile = () => {
    onChange(null);
    // Reset the input so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0] || null;
    onChange(file);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  return (
    <div className="relative mb-4">
      <label
        htmlFor={idSchema.$id}
        className="block text-sm font-medium text-gray-200"
      >
        {schema.title} {required && <span className="text-red-500">*</span>}
      </label>

      {schema.description && (
        <p className="mt-1 text-xs text-gray-400">{schema.description}</p>
      )}

      <div className="mt-2">
        <div className="relative flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-lg p-12 hover:border-gray-500 transition">
          {formData instanceof File ? (
            <div className="flex items-center gap-3 bg-gray-800/70 border border-gray-600 rounded-full px-4 py-2 w-full max-w-md">
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-200 font-medium truncate">
                  {formData.name}
                </p>
                <p className="text-xs text-gray-400">
                  {formatFileSize(formData.size)}
                </p>
              </div>
              <button
                onClick={handleRemoveFile}
                type="button"
                className="flex-shrink-0 text-gray-400 hover:text-red-400 transition p-1"
                title="Remove file"
              >
                <TiDelete className="text-xl" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                if (fileInputRef.current) {
                  fileInputRef.current.click();
                }
              }}
              className="flex flex-col items-center space-y-3 text-gray-400 hover:text-gray-200 transition group"
            >
              <LuUpload className="text-4xl group-hover:scale-110 transition" />
              <span className="text-sm font-medium">Click to select file</span>
              <span className="text-xs">or drag and drop</span>
            </button>
          )}
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        className="invisible h-0 w-0"
        accept="*/*"
      />

      {rawErrors.length > 0 && (
        <ul className="mt-1 text-sm text-red-400">
          {rawErrors.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UploadFileField;
