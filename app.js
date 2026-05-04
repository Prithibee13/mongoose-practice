import   express  from 'express';
import cors  from 'cors'
import mongoose from 'mongoose';
import { project } from './Models/ProjectModels.js'
const app = express();

const port = process.env.PORT || 8000;
app.use(cors())
app.use(express.json())

let conn = await mongoose.connect("mongodb+srv://msraziz97_db_user:l08VXQsxPi1dGCPH@authority-ledger.vworqap.mongodb.net/archivek?appName=Authority-Ledger")


app.get('/', (req, res) => {
    res.send("Archivek server is running")
})

app.get('/projects', async (req,res)=>
{
    const data = await project.find({})
    res.send(data)

})


app.listen(port, () => {
    console.log("Archivek server is runnig in port : ", port);
})