import mongoose from "mongoose";
import Executive from "../models/Executive"


// Controller function to get all executive members

export const getAllExecutiveMembers = async (req, res)=>{
    try{
        const executiveMembers = await Executive.find();
        if(executiveMembers.length === 0){
            return res.status(404).json({message: 'No executive members found'});
        }
        return res.status(200).json(executiveMembers);
    }catch(error){  
        res.status(500).json({message: error.message});
    }
}



//controller function to add executive member



//controller function to delete executive member by id



//controller function to update executive member