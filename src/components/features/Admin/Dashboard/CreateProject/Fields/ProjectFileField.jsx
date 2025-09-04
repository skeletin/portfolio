import { TiDelete } from "react-icons/ti";
import ProjectFileWidget from "../Widgets/ProjectFileWidget";
import { LuImagePlus } from "react-icons/lu";
import { useRef, useMemo, useEffect } from "react";

const ProjectFileField = (props) => {
  const {
    idSchema,
    schema,
    required,
    formData,
    onChange,
    rawErrors = [],
  } = props;

  const ref = useRef();

  // ✅ Only create object URL if formData is a File
  const url = useMemo(() => {
    if (formData instanceof File) {
      return URL.createObjectURL(formData);
    }
    return null;
  }, [formData]);

  // ✅ Cleanup when URL changes
  useEffect(() => {
    return () => {
      if (url) {
        URL.revokeObjectURL(url);
      }
    };
  }, [url]);

  const handleRemoveImage = () => {
    onChange(""); // clear value in form
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

      <div className="relative flex items-center justify-center border border-gray-500 rounded w-full h-60">
        {url && <img src={url} className="object-cover w-full h-full" />}
        {url && (
          <button onClick={handleRemoveImage} type="button" className="group">
            <TiDelete className="absolute top-3 right-3 text-3xl text-gray-600 group-hover:scale-110 group-hover:text-gray-200 transition" />
          </button>
        )}
        {!url && (
          <button
            type="button"
            onClick={() => ref.current.click()}
            className="rounded-full border border-gray-600 p-3 hover:bg-gray-700 transition group"
          >
            <LuImagePlus className="text-2xl text-gray-500 group-hover:text-gray-300 transition" />
          </button>
        )}
      </div>

      <ProjectFileWidget ref={ref} {...props} />

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

export default ProjectFileField;
