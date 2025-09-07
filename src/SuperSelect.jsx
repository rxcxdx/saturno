import { useState } from 'react'
import Select from 'react-select'

export default function SuperSelect({ docs, adicionar }) {
  const [state, setState] = useState(null)

  return (
    <div>
      <div style={{ width: '300px', marginBottom: '.5rem' }}>
        <Select
          options={docs}
          getOptionLabel={(o) => o.descricao}
          getOptionValue={(o) => o.id}
          isClearable
          value={state}
          onChange={setState}
          filterOption={(option, inputValue) =>
            option.label.includes(inputValue)
          }
        />
      </div>

      <button style={{ color: 'blue' }} onClick={() => adicionar(state)}>
        adicionar
      </button>
    </div>
  )
}
