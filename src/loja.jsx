import { useDispatch } from 'react-redux'
import { Suspense, use, useState } from 'react'
import Select from 'react-select'
import { fetcherLoja } from './api'
import { sample } from 'lodash-es'
import { FaShuffle } from 'react-icons/fa6'

function filtro(o, v) {
  return o.label.includes(v)
}

function Loja({ lojaPromise }) {
  const [state, setState] = useState(null)
  const docs = use(lojaPromise)
  const dispatch = useDispatch()

  const adicionar = (o) => {
    dispatch({ type: 'ADICIONAR', payload: o })
  }

  return (
    <div>
      <div>loja: {docs.length}</div>
      <div style={{ width: '300px' }} className="mb-2">
        <Select
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

      <div className='d-flex gap-3 align-items-center'>


        <span role='button' className='text-primary'
          onClick={() => adicionar(state)}

        >
          adicionar
        </span>
        
        <FaShuffle role="button" onClick={() => adicionar(sample(docs))} />
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
