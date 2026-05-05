import mongoose from "mongoose";
import app from "./app.js"

const port = process.env.PORT || 8000;
const DB_URI = "mongodb+srv://msraziz97_db_user:l08VXQsxPi1dGCPH@authority-ledger.vworqap.mongodb.net/archivek?appName=Authority-Ledger"
mongoose.connect(DB_URI)
    .then(() => {
        app.listen(port, () => {
            console.log("Archivek server running on port:", port);
        });
    })
    .catch(err => console.error("Database connection failed", err));