import mongoose from "mongoose";


const projectSchema = new mongoose.Schema({
    title : String,
    items : [
        {
            id : String,
            detailes : String,
            img : String
        }
    ]
})

export const project = mongoose.model('project', projectSchema)