import md5 from "md5"

const base = process.env.API_BASE
const timestamp = Date.now()
const publicKey = process.env.PUBLIC_KEY
const privateKey = process.env.PRIVATE_KEY
const hash = md5(timestamp+privateKey+publicKey)

export const limit = 24

export async function searchCharacters(offset) {
  const res = await fetch(`${base}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`)
  const data = await res.json()

  return data.data
}

export async function searchCharacterByName(name) {
  const res = await fetch(`${base}?nameStartsWith=${name}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${100}`)
  const data = await res.json()

  return data.data
}

export async function searchCharacterById(id) {
  const res = await fetch(`${base}/${id}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}`)
  const data = await res.json()

  return data.data
}