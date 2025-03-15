const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const dbconnect = require('./Database/dbConnect');
const app = express();
require('dotenv').config();
app.use(express.json());
const taskRoutes = require('./routes/accountTasksRoutes')

app.use(cors());
// accountstasks
app.use("/accountstasks", taskRoutes);

// database connect
dbconnect()

const PORT = process.env.PORT || 8013;
app.listen(PORT, ()=>{
    console.log(`connection is live at port no. ${PORT}`);
})