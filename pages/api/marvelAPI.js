import md5 from "md5"

export async function loadCharacters() {

  const base = process.env.API_BASE
  const timestamp = Date.now()
  const publicKey = process.env.PUBLIC_KEY
  const privateKey = process.env.PRIVATE_KEY
  const hash = md5(timestamp+privateKey+publicKey)

  const res = await fetch(`${base}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`)
  const data = await res.json()

  console.log(timestamp+publicKey+privateKey)
  console.log(data)

  return data.data.results
}
