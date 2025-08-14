import { useDispatch } from 'react-redux'
import { filter, sample } from 'lodash-es'
import axios from 'axios'
import { Suspense, use, useState } from 'react'
import { Button, Select } from 'grommet'
import { Erase } from 'grommet-icons';

export async function fetchLoja() {
  const response = await axios('/ws/loja')
  return response.data
}

function Conteudo({ lojaPromise }) {
  const defaultOptions = use(lojaPromise)
  const [options, setOptions] = useState(defaultOptions)
  const [state, setState] = useState(null)
  const dispatch = useDispatch()
  const tarefa = (o) => {
    dispatch({ type: 'ADICIONAR', payload: o })
  }  
  return (
    <div>
      <div>
        <Select
          onClose={() => {
            setOptions(defaultOptions)
          }}
          labelKey="descricao"
          value={state}
          options={options}
          onChange={({ option }) => {            
            setState(option)
          }}
          onSearch={(v) => {
            setOptions(filter(defaultOptions, (x) => x.descricao.includes(v)))
          }}
        />
      </div>
      <div className="hstack gap-3">
        <Button
          color="blue"
          plain
          onClick={() => {
            tarefa(state)
          }}
          label="Adicionar"
        />
        <Button
          color="blue"
          plain
          onClick={() =>
            tarefa(sample(defaultOptions))
          }
          label="Shuffle"
        />
        <Button
          plain
          size='small'
          onClick={() => setState(null)}
          icon={<Erase />}
        />
      </div>
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
