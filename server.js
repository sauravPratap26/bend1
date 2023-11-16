

import express, { response } from "express";
import { connectDB } from "./repository/employeeRepository.js";
import { Router } from "./controller/controller.js"
import "dotenv/config"
import axios from "axios";
const app=express();
connectDB();
app.use(express.json());
import cors from "cors"
app.use(cors());

app.use("/api/v1/employee",Router);


app.listen(4433,()=>console.log("server started on port 4433"));
