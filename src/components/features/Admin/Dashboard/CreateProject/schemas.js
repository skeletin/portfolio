import ProjectStringField from "./Fields/ProjectStringField";
import ProjectArrayField from "./Fields/ProjectArrayField";
import stackOptions from "../../../../data/technologyStack";

export const projectSchema = {
  type: "object",
  properties: {
    name: {
      description: "The name of the project",
      type: "string",
      title: "Name",
    },
    repoUrl: {
      description: "The link of the project's repository",
      type: "string",
      title: "Repo Url",
    },
    siteUrl: {
      description: "The link of the project's production site",
      type: "string",
      title: "Site Url",
    },
    techStack: {
      description: "The technology used to build the project",
      type: "array",
      title: "Tech Stack",
      items: { type: "string" },
      minItems: 1,
      uniqueItems: true,
    },
    year: {
      description: "The year the project was made.",
      type: "string",
      title: "Year",
    },
    description: {
      description: "The description about the project and it's capabilities",
      type: "string",
      title: "Description",
    },
  },
  required: ["name", "techStack", "year", "description"],
  additionalProperties: false,
};

export const uiSchema = {
  name: {
    "ui:autofocus": true,
    "ui:field": ProjectStringField,
  },
  repoUrl: {
    "ui:field": ProjectStringField,
  },
  siteUrl: {
    "ui:field": ProjectStringField,
  },
  techStack: {
    "ui:field": ProjectArrayField,
    "ui:options": {
      stackOptions,
    },
  },
  year: {
    "ui:field": ProjectStringField,
  },
  description: {
    "ui:field": ProjectStringField,
    "ui:options": {
      multiline: true,
    },
  },
  "ui:submitButtonOptions": {
    props: {
      disabled: true,
      className: "",
    },
    norender: false,
    submitText: "Create Project",
  },
};
