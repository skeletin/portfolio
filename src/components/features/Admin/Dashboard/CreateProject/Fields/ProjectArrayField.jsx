import { useState } from "react";
import ProjectChipWidget from "../Widgets/ProjectChipWidget";

const ProjectArrayField = (props) => {
  const {
    onChange,
    idSchema,
    schema,
    uiSchema,
    required,
    formData,
    rawErrors = [],
  } = props;
  const Widget = ProjectChipWidget;
  const stackOptions = uiSchema["ui:options"]["stackOptions"] || [];
  const [tech, setTech] = useState("");
  const techStack = formData;

  const addTechStack = (stackOption) => {
    if (!techStack.includes(stackOption)) {
      onChange([...techStack, stackOption]); //
      setTech("");
    } else {
      setTech("");
    }
  };

  const removeTechStack = (stackOption) => {
    if (techStack.includes(stackOption)) {
      onChange([...techStack.filter((tech) => tech !== stackOption)]); //
      setTech("");
    }
  };

  return (
    <div className="relative mb-4">
      <label
        htmlFor={idSchema.$id}
        className="block text-sm font-medium text-gray-200"
      >
        {schema.title} {required && <span className="text-red-500">*</span>}
      </label>
      {/* Description */}
      {schema.description && (
        <p className="mt-1 text-xs text-gray-400">{schema.description}</p>
      )}
      <Widget
        {...props}
        setTech={setTech}
        tech={tech}
        techStack={techStack}
        removeChip={removeTechStack}
      />
      {tech && (
        <DropDown options={stackOptions} value={tech} handler={addTechStack} />
      )}
      {/* Errors */}
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

const DropDown = ({ options, value, handler }) => {
  return (
    <div className="flex flex-col absolute left-0 border border-gray-600 w-full rounded bg-gray-800  max-h-40 overflow-auto">
      <span className="py-1 px-2 text-sm text-gray-400">Select an option</span>
      {[
        options
          .filter((option) =>
            option.toLowerCase().includes(value.toLowerCase())
          )
          .map((option) => {
            return (
              <button
                type="button"
                key={option}
                onClick={() => handler(option)}
                className="text-start hover:bg-gray-700 w-full py-1 px-2"
              >
                {option}
              </button>
            );
          }),
        <div
          key={"other"}
          className="text-start text-gray-700 w-full py-1 px-2 select-none"
        >
          Other
        </div>,
      ]}
    </div>
  );
};

export default ProjectArrayField;
