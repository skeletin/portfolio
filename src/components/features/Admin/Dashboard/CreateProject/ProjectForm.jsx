import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { projectSchema, uiSchema } from "./schemas";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createProject } from "../../../../../endpoints/admin/ProjectEndpoints";
import humps from "humps";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    repoUrl: "",
    siteUrl: "",
    year: "",
    description: "",
    techStack: [],
    displayPicture: null,
  });

  const { mutate } = useMutation({
    mutationFn: createProject,
    onSuccess: (data) => console.log(data),
  });

  const handleSubmit = () => {
    const body = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "techStack")
        value.forEach((item) =>
          body.append(`project[${humps.decamelize(key)}][]`, item)
        );
      else body.append(`project[${humps.decamelize(key)}]`, value);
    });
    mutate(body);
  };

  return (
    <Form
      schema={projectSchema}
      validator={validator}
      uiSchema={uiSchema}
      formData={formData}
      formContext={formData}
      onSubmit={(e) => handleSubmit(e)}
      onChange={(e) => setFormData(e.formData)}
      className="bg-gray-800/70 p-8 mt-10 rounded backdrop-blur-2xl w-full max-w-[40rem]"
    />
  );
};

export default ProjectForm;
