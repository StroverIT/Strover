"use server"
import sendEmail from "../../libs/sendEmail"
 const FormFetch = async(data)=>{

    try{
    const typeMessage = data.get("typeMessage")
    const name = data.get("name")
    const email = data.get("email")
    const message = data.get("message")
    const checkbox = data.get("checkbox")
    if(!name || !email || !message || !typeMessage) throw { error: "Моля попълнете всички полета."}

    if(!checkbox) throw {error: "Няма съгласие за GDPR. Няма съобщение."}

    const emailMessage= `
      <h3>Съобщение от ${name}, с и-мейл ${email} - ${typeMessage}</h3>
      <p>${message}</p>
      `;
      // Sending email
      await sendEmail(
        process.env.EMAIL_SEND,
        process.env.EMAIL_SEND,
        `${typeMessage} - Ново съобщение от - ${name} ${email}`,
        emailMessage
      );
    return {message: "Успешно изпратихте вашето съобщение!"}
    }catch(e){
        console.log(e);
        return e
    }

}

export default FormFetch