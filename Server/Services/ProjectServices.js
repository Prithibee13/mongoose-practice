import { project } from "../Models/ProjectModels.js"


export const getAllProject = async() =>
{  
    return await project.find({})
} 