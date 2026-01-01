import { useDispatch } from 'react-redux'
import Modal from 'react-modal'
import { useState } from 'react'
import InputNumber from 'rc-input-number'
import { CiEdit } from 'react-icons/ci'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

function Formulario({ valor, quantidade, onOK }) {
  const [state, setState] = useState({ valor, quantidade })

  return (
    <div>

<div>quantidade</div>
      <div>
        <InputNumber
          className="w-full"
          value={state.quantidade}
          onChange={(v) => setState({...state, quantidade: v})}
          inputMode="numeric"
          controls={false}
          precision={0}

        />
      </div>

      <div>valor</div>
      <div className='mb-3'>
        <InputNumber
          className="w-full"
          value={state.valor}
          onChange={(v) => setState({...state, valor: v})}
          decimalSeparator=","
          precision={2}
          inputMode="decimal"
          step={0.01}
          controls={false}
        />
      </div>      
 
      <button className='text-green-700' onClick={() => onOK(state)}>OK</button>
    </div>
  )
}

export default function Editar({ identifier,valor,quantidade }) {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <CiEdit size="2em" onClick={() => setIsOpen(true)} />

      <Modal ariaHideApp={false} isOpen={isOpen} style={customStyles}>
        <div className="font-bold">EDITAR</div>
        <div className='text-xs'>{identifier}</div>
        <div>
          <button className='text-red-700' onClick={() => setIsOpen(false)}>Cancelar</button>
        </div>
        <Formulario
          valor={valor}
          quantidade={quantidade}
          onOK={(o) => {
            dispatch({
              type: 'EDITAR',
              identifier,
              payload: o
            })
            setIsOpen(false)
          }}
        />
      </Modal>
    </>
  )
}
