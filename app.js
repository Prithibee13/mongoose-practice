import   express  from 'express';
import cors  from 'cors'
import mongoose from 'mongoose';
import { project } from './Server/Models/ProjectModels.js'
import projectRouter from './Server/Routes/ProjectRoutes.js';
const app = express();

const port = process.env.PORT || 8000;
app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
    res.send("Archivek server is running")
})

app.use('/projects', projectRouter)

export default app
