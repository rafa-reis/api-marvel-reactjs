import axios from 'axios'
import md5 from 'md5'

export const privateKey = 'b8bf1aeee5d5e921c4f53d2bb4674e5fd7e53ce3'
export const publicKey = '4decd1a4d8a685e0314853a1583687ec'

const ts = Number(new Date())

const hash = md5(ts + privateKey + publicKey)

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
})

export default api
