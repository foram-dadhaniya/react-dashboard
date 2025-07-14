import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { ChangeEvent, FormEvent, useState } from "react"

export const Projects: React.FC = () => {
    const [projectData, setProjectData] = useState({
        id:'',
        projectName: '',
        startDate: '',
        endDate: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        return(
            setProjectData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }
            ))
        )
    }
    return (
       
            <form>
                <input name="projectName" type="text" onChange={handleChange} value={projectData.projectName}></input>
                <input name="startDate" type="date" value={projectData.startDate} ></input>
                <input name="endDate" type="date" value={projectData.endDate} ></input>
                <button type="submit">Add Project</button>
            </form>
        
    )
}