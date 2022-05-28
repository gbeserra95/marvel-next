import md5 from "md5"

async function fetchData(slug) {
    const base = process.env.API_BASE
    const timestamp = Date.now()
    const publicKey = process.env.PUBLIC_KEY
    const privateKey = process.env.PRIVATE_KEY
    const hash = md5(timestamp+privateKey+publicKey)

    const res = await fetch(`${base}/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${slug}&limit=100`)
    const data = await res.json()

    return data
}


export default async function handler(req, res) {
    const { slug } = req.query
    const response = await fetchData(slug)
    
    if(response) {
        res.status(200).json(response.data)
    } else {
        res.status(404).end()
    }
}