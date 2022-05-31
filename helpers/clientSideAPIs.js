import md5 from "md5"

const base = process.env.API_BASE
const timestamp = Date.now()
const publicKey = process.env.PUBLIC_KEY
const privateKey = process.env.PRIVATE_KEY
const hash = md5(timestamp+privateKey+publicKey)
const limit = 24

export async function fetchCharacters() {
	const response = await fetch(`${base}/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}`)
	const data = await response.json()

	return data
}

export async function fetchCharacterById(id) {
	const response = await fetch(`${base}/characters/${id}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`)
	const data = await response.json()

	return data
}

export async function fetchComicsById(id) {
	const response = await fetch(`${base}/characters/${id}/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`)
	const data = await response.json()

	return data
}

export async function fetchEventsById(id) {
	const response = await fetch(`${base}/characters/${id}/events?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`)
	const data = await response.json()

	return data
}

export async function fetchSeriesById(id) {
	const response = await fetch(`${base}/characters/${id}/series?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`)
	const data = await response.json()

	return data
}