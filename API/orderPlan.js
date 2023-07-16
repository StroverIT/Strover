"use server"
import sendEmail from "../libs/sendEmail";

import {connectMongo} from "../db/connectDb"
import Order from "../db/models/Order";
export const orderPlan = async({inputs,currMoney, productsMoney})=>{

    try{
        await connectMongo()

        const order = await Order.create({...inputs, money: currMoney + productsMoney})
        
        const emailMessage= `
        <h3>Съобщение от ${inputs.fullName}, с и-мейл ${inputs.email} - ${inputs.typePlan} - ${inputs.typeService} </h3>
        <ul>
             <li>E-mail: ${(inputs.email && inputs.email.length > 0) && inputs.email}</li>
             <li>Телефон: ${inputs.phoneNumber}</li>
             <li>Поръчка №: ${order._id}</li>
            
        </ul>
        `;
        // Sending email
        await sendEmail(
          process.env.EMAIL_SEND,
          process.env.EMAIL_SEND,
          `Нова поръчка от - ${inputs.fullName}`,
          emailMessage
        );
        return {message: "Успешно направихте поръчка!"}

    }catch(e){
        console.log(e);
        return {error: e}
    }
}