import { useDispatch, useSelector } from 'react-redux'

export default function Obs() {
  const dispatch = useDispatch()
  const obs = useSelector((store) => store.obs)
  const tarefa = (e) => {
    dispatch({
      type: 'OBS',
      payload: e.target.value
    })
  }
  return (
    <div>
      <div>
        obs: <input type="text" value={obs} onChange={tarefa} />
      </div>
    </div>
  )
}
