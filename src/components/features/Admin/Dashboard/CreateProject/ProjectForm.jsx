import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { projectSchema, uiSchema } from "./schemas";
import { useState } from "react";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    repoUrl: "",
    siteUrl: "",
    year: "",
    description: "",
    techStack: [],
  });

  return (
    <Form
      hello={"hello"}
      schema={projectSchema}
      validator={validator}
      uiSchema={uiSchema}
      formData={formData}
      formContext={formData}
      onChange={(e) => setFormData(e.formData)}
      className="bg-gray-800/70 p-8 mt-10 rounded backdrop-blur-2xl w-full max-w-[40rem]"
    />
  );
};

export default ProjectForm;
