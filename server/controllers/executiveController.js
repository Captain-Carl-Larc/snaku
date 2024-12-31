import mongoose from "mongoose";
import Executive from "../models/Executive.js"


// Controller function to get all executive members

export const getAllExecutiveMembers = async (req, res)=>{
    try{
        const executiveMembers = await Executive.find({});
        if(executiveMembers.length===0) {
            return res.status(404).json({message: 'No executive members found'});
        }
        return res.status(200).json(executiveMembers);
        
    }
    catch(error){  
        res.status(500).json({message: error.message});
    }
}

// Controller function to get executive by id
export const getExecutiveById = async (req, res)=>{
    try{
        // validate the id
        const { id } = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message:`Invalid string id ${id}`});
        }

        // find the executive member by id and return it if found, otherwise return 404
        const executiveMember = await Executive.findById(req.params.id);
        if(!executiveMember) {
            return res.status(404).json({message: 'Executive member not found'});
        }
        return res.status(200).json(executiveMember);
        
    }
    catch(error){  
        res.status(500).json({message: error.message});
    }
}

//controller function to add executive member
export const addExecutiveMember = async (req,res)=>{
    try{
        // validate the request body
        const {position}=req.body
        if(position){
            return res.status(409).json({
                error: "Conflict",
                message: `The position '${position}' is already occupied.`,
            });
        }
        const executiveMember = await Executive.create(req.body);
        return res.status(201).json(executiveMember);        
    }
    catch(error){  
        res.status(400).json({message: error.message});
    }
}


//controller function to delete executive member by id
export const deleteExecutiveMemberById = async (req, res) => {
    try{
        // validate the id
        const { id } = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message:`Invalid string id ${id}`});
        }

        //see if we have the executive
        const executive = await Executive.findById(id)
        if(!executive){
            return res.status(404).json({message: 'Executive member not found'});
        }
        // delete the executive
        await Executive.findByIdAndDelete({_id: id})
        return res.status(200).json({message: `${id} deleted`})
        
    }catch(error){
        res.status(500).json({message: error.message});
    }
}


//controller function to update executive member