import md5 from "md5"

const base = process.env.API_BASE
const timestamp = Date.now()
const publicKey = process.env.PUBLIC_KEY
const privateKey = process.env.PRIVATE_KEY
const hash = md5(timestamp+privateKey+publicKey)
const limit = 24

async function fetchData(page) {

    const res = await fetch(`${base}/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${limit * (page - 1)}`)
    const data = await res.json()

    return data
}


export default async function handler(req, res) {
    const { page } = req.query || 1
    const response = await fetchData(page)
    
    if(response) {
        res.status(200).json(response.data)
    } else {
        res.status(404).end()
    }
}