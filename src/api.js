import axios from 'axios'
import { get } from 'lodash-es'

function buildMessage(error) {
  return get(error, 'response.data.message')
}

export async function mutateBuy(dto) {
  try {
    const { data } = await axios.post('/ws/buy', dto)
    return data
  } catch (e) {
    throw new Error(buildMessage(e))
  }
}

export async function fetcherLoja() {
  const { data } = await axios('/ws/loja')
  return data
}
