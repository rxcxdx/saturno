import axios from 'axios'
import { get } from 'lodash-es'

export async function mutateBuy(dto) {
  try {
    const { data } = await axios.post('/ws/buy', dto)
    return data
  } catch (e) {
    throw Error(get(e, 'response.data.message'))
  }
}

export async function fetcherLoja() {
  const { data } = await axios('/ws/loja')
  return data
}
