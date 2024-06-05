import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const registerUser= asyncHandler(async(req,res)=>{
  

    const {username,email,password,fullName}=req.body;

    if([username,email,password,fullName].some((fields)=>fields?.trim()==='')){
        throw new ApiError(400,'Please fill all fields');
        
    }

  const existedUser=await User.findOne({$or:[{username},{email}]});

  if(existedUser){
      throw new ApiError(409,'User with this email or username  already exists');
  }

const avatarLocalPath=req.files?.avatar[0].path;
const coverImageLocalPath=req.files?.coverImage[0].path;

if(!avatarLocalPath){
    throw new ApiError(400,'Please upload avatar');
}

const avatar=await uploadOnCloudinary(avatarLocalPath);
const coverImage=await uploadOnCloudinary(coverImageLocalPath);

if(!avatar){
    throw new ApiError(400,'Could not upload images');
}

const user=await User.create({
    username:username.trim().toLowerCase(),
    email,
    password,
    fullName,
    avatar:avatar.url,
    coverImage:coverImage?.url || ""

});

const createUser= await user.findbyId(user._id).select('-password -refreshToken');

if(!createUser){
    throw new ApiError(500,'Could not create user');
}

return res.status(201).json(new ApiResponse(200,createUser,'User created successfully'));

});

export {registerUser};