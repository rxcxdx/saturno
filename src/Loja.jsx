import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Suspense, use } from 'react'
import { sample } from 'lodash-es'
import SuperSelect from './SuperSelect'

export async function fetchLoja() {
  const response = await axios('/ws/loja')
  return response.data
}

function Conteudo({ lojaPromise }) {
  const docs = use(lojaPromise)
  const dispatch = useDispatch()
  const adicionar = (o) => {
    dispatch({ type: 'ADICIONAR', payload: o })
  }
  return (
    <div>
      <div>Loja: {docs.length}</div>
      <div style={{ marginBottom: '.5rem' }}>
        <button
          style={{ color: 'blue' }}
          onClick={() => {
            const o = sample(docs)
            adicionar(o)
          }}
        >
          random
        </button>
      </div>
      <SuperSelect docs={docs} adicionar={adicionar} />
    </div>
  )
}

export default function Loja() {
  const lojaPromise = fetchLoja()
  return (
    <div>
      <Suspense fallback={<div>carregando loja...</div>}>
        <Conteudo lojaPromise={lojaPromise} />
      </Suspense>
    </div>
  )
}
