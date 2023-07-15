export default async function getIpAddress(){
    const ipRes = await fetch("http://api.ipify.org/")
    const ip = await ipRes.text()
    return ip
}