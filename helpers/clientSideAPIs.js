import md5 from "md5"

const base = process.env.API_BASE
const timestamp = Date.now()
const publicKey = process.env.PUBLIC_KEY
const privateKey = process.env.PRIVATE_KEY
const hash = md5(timestamp+privateKey+publicKey)
const limit = 24

export async function fetchCharacters() {
    const options = {
		method: 'GET',
		url: `${base}/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}`
	}

	try {
		const response = await axios(options)
		return response.json()
	} catch (error) {
		// Sends error to the client side
		return error.response.json()
	}
}

export async function fetchCharacterById(id) {
    const options = {
		method: 'GET',
		url: `${base}/characters/${id}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
	}

	try {
		const response = await axios(options)
		return response.json()
	} catch (error) {
		// Sends error to the client side
		return error.response.json()
	}
}

export async function fetchComicsById(id) {
    const options = {
		method: 'GET',
		url: `${base}/characters/${id}/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
	}

	try {
		const response = await axios(options)
		return response.json()
	} catch (error) {
		// Sends error to the client side
		return error.response.json()
	}
}

export async function fetchEventsById(id) {
    const options = {
		method: 'GET',
		url: `${base}/characters/${id}/events?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
	}

	try {
		const response = await axios(options)
		return response.json()
	} catch (error) {
		// Sends error to the client side
		return error.response.json()
	}
}

export async function fetchSeriesById(id) {
    const options = {
		method: 'GET',
		url: `${base}/characters/${id}/series?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
	}

	try {
		const response = await axios(options)
		return response.json()
	} catch (error) {
		// Sends error to the client side
		return error.response.json()
	}
}