// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectMongo } from "../../../db/connectDb"
import Project from "../../../db/models/Project"

import getIpAddress from "../../../libs/getipAddress"

export default async function handler(req, res) {

try{
  
  await connectMongo()

  const projects = await Project.find({})
  res.status(200).json({ data: projects })
}catch(e){
  console.log(e);
}
  }
  