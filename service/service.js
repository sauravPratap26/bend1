
import Emp from "../model/employeeModule.js"

const createEmp=async(req,res)=>{
    // console.log(req.body)
    // const ename=req.body.ename;
    // const email=req.body.email; 
    // const emobile=req.body.emobile;

    const{ename,email,emobile}=req.body
    if(!ename || !email || !emobile){
    res.status(404).json({message:"Missing Fields.."}) }
    else 
    {
        try{
            const response=await Emp.create({ename,email,emobile})
            if(response)
            res.status(201).json({message:"Record Successfully Created.."})
            else
            res.status(201).json({message:"Unable to create record.."})
        }catch(err){
            res.json(err.message)
        }
    }
}

const getEmp=async(req,res)=>{
    try{
        const e=await Emp.find() 
        if(e.length!=0)
        res.status(200).json(e)
        else
        res.status(404).json({message:"No such record found"})
    }catch(err){
        res.json(err.message)
    }
}

const getEmps=async(req,res)=>{
    try{
        const e=await Emp.findById(req.params.id) 
        if(e)
        res.status(200).json(e)
        else
        res.status(404).json({message:"No such record found"})
    }catch(err){
        res.json(err.message)
    }
}

const delEmp=async(req,res)=>{
    try{
        const e=await Emp.findByIdAndRemove(req.params.id) 
        if(e)
        res.status(200).json({message:"Record Deleted.."})
        else
        res.status(404).json({message:"No such record found"})
    }catch(err){
        res.json(err.message)
    }
}

const updEmp=async(req,res)=>{
    try{
        const e=await Emp.findByIdAndUpdate(req.params.id,req.body,{new:true}) 
        if(e)
        res.status(200).json({message:"Record Updated Successfully.."})
        else
        res.status(404).json({message:"No Such record found"})
    }catch(err){
        res.json(err.message)
    }
}
export{createEmp,getEmp,getEmps,delEmp,updEmp}