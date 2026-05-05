import express from "express"
import { getProject } from "../Controllers/ProjrctController.js";


const projectRouter = express.Router();

projectRouter.get('/', getProject)

export default projectRouter