"use server";
import Analyze from "../db/models/Analyze";

import { connectMongo } from "../db/connectDb";
import { ObjectId } from "mongodb";
import sendEmail from "../libs/sendEmail";

export const getAnalyze = async (data) => {
  try {
    const websiteLink = data.get("websiteLink")
    const email = data.get("websiteLink")
    
    await connectMongo();
    
    const analyze = await Analyze.create({websiteLink, email})

    const emailMessage= `
    <h3>Безплатен анализ за ${websiteLink} с и-мейл${email} </h3>
    <p>Поръчка № ${analyze._id}</p>
    `;
    await sendEmail(
      process.env.EMAIL_SEND,
      process.env.EMAIL_SEND,
      `Безплатен анализ - ${email}`,
      emailMessage
    );
    // revalidatePath(`/projects/${projectId}`)
    return { message: "Успешно заявихте безплатен анализ!" };
  } catch (e) {
    console.log("ERROR:", e);
    return { error: e };
  }
};
