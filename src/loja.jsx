import { useDispatch } from 'react-redux'
import { Suspense, use, useState } from 'react'
import Select from 'react-select'
import { fetcherLoja } from './api'
import { sample } from 'lodash-es'

function Loja({ lojaPromise }) {
  const [state, setState] = useState(null)
  const docs = use(lojaPromise)
  const dispatch = useDispatch()

  const adicionarNoCart = (o) => {
    dispatch({ type: 'ADICIONAR', payload: o })
  }

  return (
    <div className="w-xs">
      <div>tamanho: {docs.length}</div>

      <Select
        placeholder="selecione"
        options={docs}
        getOptionLabel={(o) => o.descricao}
        getOptionValue={(o) => o.id}
        isClearable
        value={state}
        onChange={setState}
        filterOption={(o, v) => {
          return o.label.includes(v)
        }}
      />

      <br />

      <div className="flex gap-3">
        <button className="border" onClick={() => adicionarNoCart(state)}>
          adicionar
        </button>
        <button
          className="border"
          onClick={() => {
            adicionarNoCart(sample(docs))
          }}
        >
          shuffle
        </button>
      </div>
    </div>
  )
}

export function LojaContainer() {
  const lojaPromise = fetcherLoja()
  return (
    <div>
      <Suspense fallback={<div>carregando loja...</div>}>
        <Loja lojaPromise={lojaPromise} />
      </Suspense>
    </div>
  )
}
