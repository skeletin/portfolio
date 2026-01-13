import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { uploadSchema, uiSchema } from "./schemas";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "../../../../../endpoints/admin/ProjectEndpoints";

const UploadForm = () => {
  const [formData, setFormData] = useState({
    file: null,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: uploadFile,
    onSuccess: (data) => {
      console.log("File uploaded successfully:", data);
      // Reset form on success
      setFormData({ file: null });
    },
    onError: (error) => {
      console.error("Upload error:", error);
    },
  });

  const handleSubmit = () => {
    const body = new FormData();
    if (formData.file) {
      body.append("file", formData.file);
    }
    mutate(body);
  };

  return (
    <Form
      schema={uploadSchema}
      validator={validator}
      uiSchema={uiSchema}
      formData={formData}
      formContext={formData}
      onSubmit={(e) => handleSubmit(e)}
      onChange={(e) => setFormData(e.formData)}
      className="bg-gray-800/70 p-8 mt-10 rounded backdrop-blur-2xl w-full max-w-[40rem]"
      disabled={isPending}
    />
  );
};

export default UploadForm;
