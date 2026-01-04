import { useDispatch } from 'react-redux'
import { Suspense, use, useState } from 'react'
import Select from 'react-select'
import { fetcherLoja } from './api'
import { sample } from 'lodash-es'
import { FaShuffle } from 'react-icons/fa6'

function filtro(o, v) {
  const regex = RegExp(v, 'i')  
  return regex.test(o.label)
}

function Loja({ promise }) {
  const docs = use(promise)
  const dispatch = useDispatch()
  const [state, setState] = useState(null)
  const unshift = (o) => {
    dispatch({ type: 'UNSHIFT', payload: o })
  }
  return (
    <div>
      <div>loja: {docs.length}</div>
      <div>
        <Select
        className='w-xs'
          placeholder="selecione"
          options={docs}
          getOptionLabel={(o) => o.descricao}
          getOptionValue={(o) => o.id}
          isClearable
          value={state}
          onChange={setState}
          filterOption={filtro}
        />
      </div>
      <div className='flex gap-x-3'>
        <button
          onClick={() => unshift(state)}
        >
          adicionar
        </button>
        <FaShuffle size="2em" onClick={() => unshift(sample(docs))} />
      </div>
    </div>
  )
}

export function LojaContainer() {
  const promise = fetcherLoja()
  return (
    <div>
      <Suspense fallback={<div>carregando...</div>}>
        <Loja promise={promise} />
      </Suspense>
    </div>
  )
}
