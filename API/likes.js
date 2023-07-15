"use server";
import Likes from "../db/models/Likes";
import Project from "../db/models/Project";
import { connectMongo } from "../db/connectDb";
import { revalidatePath } from 'next/cache'
import { ObjectId } from "mongodb";

export const addLike = async ({ projectId, ip }) => {
  try {
    console.log("vlezna BRAT");
    await connectMongo();
    
    const like = await Likes.create({
      ownerIp: ip,
      projectId,
    });
    await Project.updateOne(
      { _id: new ObjectId(projectId) },
      { $push: { likes: like._id } }
    );
    // revalidatePath(`/projects/${projectId}`)
    return { message: "Успешно харесахте проекта!" };
  } catch (e) {
    console.log("ERROR:", e);
    return { error: e };
  }
};
export const getProjectLikes = async ({ projectId, ip }) => {
  try {
    await connectMongo();
    const projectData = await Project.findOne({ _id: new ObjectId(projectId) });

    const likes = await Likes.find({ ownerIp: ip });
    const isLiked = likes.find(
      (e) => e.ownerIp == ip && projectId.toString() == e.projectId.toString()
    )
      ? true
      : false;
    const likesLen = projectData.likes.length;


    return { likesLen, isLiked };
  } catch (e) {
    console.log("Server Error:", e);
    return { error: e };
  }
};
