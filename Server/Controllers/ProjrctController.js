import * as projectService from "../Services/ProjectServices.js"
export const getProject = async(req,res) =>
{
    const data = await projectService.getAllProject()
    res.send(data)
}