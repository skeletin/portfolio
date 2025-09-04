import ProjectTextAreaWidget from "../Widgets/ProjectTextAreaWidget";
import ProjectTextWidget from "../Widgets/ProjectTextWidget";

const ProjectStringField = (props) => {
  const { idSchema, schema, required, uiSchema, rawErrors = [] } = props;
  const { multiline } = uiSchema?.["ui:options"] || {};
  const Widget = multiline ? ProjectTextAreaWidget : ProjectTextWidget;

  return (
    <div className="mb-4">
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

      <Widget {...props} />

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

export default ProjectStringField;
