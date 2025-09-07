import { useState } from 'react'
import { find } from 'lodash-es'

export default function SuperSelect({ docs, adicionar }) {
  const [state, setState] = useState('')
  const options = docs.map((o) => (
    <option key={o.id} value={o.id}>
      {o.descricao}
    </option>
  ))
  return (
    <div>
      <select
        style={{ width: '150px' }}
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="">SELECIONE</option>
        {options}
      </select>
      &nbsp;
      <button
        style={{ color: 'blue' }}
        disabled={!state}
        onClick={() => {
          const o = find(docs, { id: state })
          adicionar(o)
        }}
      >
        adicionar
      </button>
      &nbsp;
      <button onClick={() => setState('')}>clear</button>
    </div>
  )
}
