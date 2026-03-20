import fetch from "node-fetch"
import FormData from "form-data"

export default async function handler(req,res){

const botToken = process.env.BOT_TOKEN
const logChat = process.env.LOG_CHAT_ID

const file = req.file

const form = new FormData()

form.append("chat_id", logChat)
form.append("caption", "💰 Новая заявка на пополнение")
form.append("photo", file.buffer, "receipt.jpg")

await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`,{
method:"POST",
body:form
})

res.json({ok:true})

}