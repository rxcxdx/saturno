import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { TfiClose } from 'react-icons/tfi'

function ModalConteudo({ fecharModal, bean }) {
  const ref = useRef()
  const dispatch = useDispatch()
  /*
  useEffect(() => {
    console.log('montou')
    return () => {
      console.log('desmontou')
    };
  }, []);
  */
  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: '#a7d0d9',
        top: 0,
        left: 0,
        padding: '10px',
        margin: '3px',
        border: '1px solid black'
      }}
    >
      <div>
        <TfiClose onClick={() => fecharModal()} />
      </div>
      <div>
        <small>novo valor</small>
      </div>
      <div>
        <input style={{ width: '150px' }} type="number" ref={ref} step={0.01} />
        &nbsp;
        <button
          onClick={() => {
            dispatch({
              type: 'VALOR',
              identifier: bean.identifier,
              payload: ref.current.valueAsNumber
            })
            fecharModal()
          }}
        >
          OK
        </button>
      </div>
    </div>
  )
}

export default function Valor({ bean }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      {open && <ModalConteudo bean={bean} fecharModal={() => setOpen(false)} />}
      <div>valor: {bean.valor}</div>
      <div>
        <button onClick={() => setOpen(true)}>editar valor</button>
      </div>
    </div>
  )
}
