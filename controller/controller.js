import express from "express"
const Router=express.Router()
import { createEmp,getEmp,getEmps,delEmp,updEmp } from "../service/service.js"

Router.route("/").get(getEmp)
Router.route("/:id").get(getEmps)
Router.route("/:id").put(updEmp)
Router.route("/:id").delete(delEmp)
Router.route("/").post(createEmp)
export { Router }