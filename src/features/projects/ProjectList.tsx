import { Formik, Form, FormikHelpers } from "formik";
import { TextInput } from "../../components/form/TextInput";
import { Button } from "../auth/Auth.styles";
import { ProjectInputValues } from "../../types/types";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { addProject, deleteProject, editProject } from "./projectSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Card } from "../../styles/Card.style";

export const ProjectList: React.FC = () => {
  const [editingProject, setEditingProject] =
    useState<ProjectInputValues | null>(null);
  const projects = useSelector((state: RootState) => state.project.projects);
  const dispatch = useDispatch<AppDispatch>();
  const projectInitialValues: ProjectInputValues = {
    id: "",
    projectName: "",
    startDate: "",
    endDate: "",
  };

  const handleSubmit = (
    values: ProjectInputValues,
    actions: FormikHelpers<ProjectInputValues>
  ) => {
    if (editingProject) {
      dispatch(editProject(values));
      setEditingProject(null);
    } else {
      dispatch(addProject({ ...values, id: uuidv4() }));
    }
    actions.resetForm();
  };
  return (
    <>
      <Card className="card">
        <div className="card-header">
          <div className="card-title mb-0">Create Project</div>
        </div>
        <div className="card-body">
          <Formik
            initialValues={editingProject || projectInitialValues}
            enableReinitialize
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="row g-2">
                <div className="col-md-6">
                  <TextInput
                    label="Project Name"
                    name="projectName"
                    type="text"
                    placeholder="Enter project name"
                  ></TextInput>
                </div>
                <div className="col-md-6">
                  <TextInput
                    label="Start Date"
                    name="startDate"
                    type="date"
                    placeholder="Enter start date"
                  ></TextInput>
                </div>
              </div>
              <div className="row g-2">
                <div className="col-md-6">
                  <TextInput
                    label="End Date"
                    name="endDate"
                    type="date"
                    placeholder="Enter end date"
                  ></TextInput>
                </div>
              </div>

              <Button type="submit">{editingProject ? "Edit Project" : "Add Project"}</Button>
            </Form>
          </Formik>
        </div>
      </Card>

      <Card className="card">
        <div className="card-header">
          <div className="card-title mb-0">Create Project</div>
        </div>
        <div className="card-body">
          {projects.length === 0 ? (
            <p>No project added</p>
          ) : (
            <table className="table">
              <thead>
                <th>Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Edit Project</th>
                <th>Delete Project</th>
              </thead>
              <tbody>
                {projects.map((project, id) => {
                  return (
                    <tr key={id}>
                      <td>{project.projectName}</td>
                      <td>{project.startDate}</td>
                      <td>{project.endDate}</td>
                      <td onClick={() => setEditingProject(project)}>Edit</td>
                      <td onClick={() => dispatch(deleteProject(project.id))}>
                        Delete
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </Card>
    </>
  );
};
