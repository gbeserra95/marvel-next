import axios from "axios"
import md5 from "md5"

const base = process.env.API_BASE
const timestamp = Date.now()
const publicKey = process.env.PUBLIC_KEY
const privateKey = process.env.PRIVATE_KEY
const hash = md5(timestamp+privateKey+publicKey)
const limit = 24

export default async function handler(req, res) {
    const { page } = req.query || 1 
    const options = {
		method: 'GET',
		url: `${base}/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${limit * (page - 1)}`
	}

	try {
		let response = await axios(options);
		res.status(200).json(response.data);
	} catch (error) {
		// Sends error to the client side
		res.status(error.response.status).send(error.response.data);
	}
}