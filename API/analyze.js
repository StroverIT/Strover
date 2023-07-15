"use server";
import Likes from "../db/models/Likes";
import Project from "../db/models/Project";
import { connectMongo } from "../db/connectDb";
import { ObjectId } from "mongodb";

export const getAnalyze = async ({ projectId, ip }) => {
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
