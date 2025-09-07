import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

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
        <button onClick={() => fecharModal()}>close</button>
      </div>
      <div>
        <small>novo valor</small>
      </div>
      <div>
        <input style={{ width: '130px' }} type="number" ref={ref} step={0.01} />
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
      <div>
        <span>valor: {bean.valor}</span>&nbsp;
        <button onClick={() => setOpen(true)}>editar</button>
      </div>

      {open && <ModalConteudo bean={bean} fecharModal={() => setOpen(false)} />}
    </div>
  )
}
