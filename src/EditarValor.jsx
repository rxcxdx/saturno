import { useDispatch } from 'react-redux'
import Modal from 'react-modal'
import { useState } from 'react'

const ESTILO_INPUT = "border border-secondary bg-white rounded-0 w-100"

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

export default function EditarValor({ identifier, valor, descricao}) {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [state, setState] = useState('')
  const closeModal = () => {
    setIsOpen(false)
    setState('')
  }
  const confirmar = () => {
    dispatch({
      type: 'EDITAR_VALOR',
      identifier,
      payload: state
    })
    closeModal()
  }
  return (
    <>
      <span
        role="button"
        className="text-primary"
        onClick={() => setIsOpen(true)}
      >
        editar_valor
      </span>
      <Modal ariaHideApp={false} isOpen={isOpen} style={customStyles}>
        <div className="fw-bold">EDITAR VALOR</div>
        <div>descricao: {descricao}</div>
        <div>valor: {valor}</div>
        <div className="mb-2">
          <input
          className={ESTILO_INPUT}
            type="number"
            value={state}
            onChange={(evt) => setState(evt.target.value)}
            step={0.01}
          />
        </div>
        <div>
          <span role='button'
            onClick={() => closeModal()}
            className='text-danger'
          >
            Cancelar
          </span>
          &nbsp;
          <span className='text-success' role='button' onClick={confirmar}>
            OK
          </span>
        </div>
      </Modal>
    </>
  )
}
