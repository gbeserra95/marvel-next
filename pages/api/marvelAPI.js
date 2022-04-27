import md5 from "md5"

export async function charactersData() {
  const base = process.env.API_BASE
  const timestamp = Date.now()
  const publicKey = process.env.PUBLIC_KEY
  const privateKey = process.env.PRIVATE_KEY
  const hash = md5(timestamp+privateKey+publicKey)
  const limit = 20

  const res = await fetch(`${base}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}`)
  const data = await res.json()

  return data.data
}
