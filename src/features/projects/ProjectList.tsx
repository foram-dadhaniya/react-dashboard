import { Formik, Form, FormikHelpers } from "formik";
import { TextInput } from "../../components/form/TextInput";
import { Button } from "../auth/Auth.styles";
import {ProjectInputValues} from "../../types/types"
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { addProject, deleteProject, editProject } from "./projectSlice";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";
import { useState } from "react";

export const ProjectList: React.FC = () => {
    const [editingProject, setEditingProject] = useState<ProjectInputValues | null>(null);
    const projects = useSelector((state: RootState) => (state.project.projects));
    const dispatch = useDispatch<AppDispatch>();
    const projectInitialValues: ProjectInputValues = {
        id:'',
        projectName: '',
        startDate: '',
        endDate: ''
    }
    

    const handleSubmit = (values: ProjectInputValues, actions: FormikHelpers<ProjectInputValues>) => {
        if(editingProject){
            dispatch(editProject(values));
            setEditingProject(null);
        }else {
            dispatch(addProject({...values, id: uuidv4()}));
        }
        actions.resetForm();
    }
    return (
        <>
             <Formik initialValues={editingProject || projectInitialValues} enableReinitialize onSubmit={handleSubmit}>
                <Form>
                    <TextInput label="Project Name" name="projectName" type="text" placeholder="Enter project name"></TextInput>
                    <TextInput label="Start Date" name="startDate" type="date" placeholder="Enter start date" ></TextInput>
                    <TextInput label="End Date" name="endDate" type="date" placeholder="Enter end date" ></TextInput>
                    <Button type="submit">Add Project</Button>
                </Form>
            </Formik>
            <table>
                <tbody>
                    {projects.map((project, id) => {
                        return (
                            <tr key={id}>
                                <td>{project.projectName}</td>
                                <td>{project.startDate}</td>
                                <td>{project.endDate}</td>
                                <td onClick={() => setEditingProject(project)} >Edit</td>
                                <td onClick={() => dispatch(deleteProject(project.id))}>Delete</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}