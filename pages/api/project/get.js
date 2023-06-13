// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectMongo } from "../../../db/connectDb"
import {ObjectId} from "mongodb"
import Project from "../../../db/models/Project"

import getIpAddress from "../../../libs/getipAddress"

export default async function handler(req, res) {

    await connectMongo()
    const {_id} = req.body

    // Get ip
    const ip = await getIpAddress()
    const project = await Project.findOne({_id: new ObjectId(_id)})

    const listOfProjects = await Project.find({})
    const currIndex = listOfProjects.findIndex(element=> element._id == _id)
    const totalLen = listOfProjects.length
    const prevProject = listOfProjects[currIndex - 1 == -1 ? totalLen-1 : currIndex - 1 ]
    const nextProject = listOfProjects[currIndex + 1 ==  totalLen + 1? 0 : currIndex + 1]


    res.status(200).json({ data: project, prevProject, nextProject, ip})
  }
  
  