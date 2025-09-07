import { useSelector } from 'react-redux'

export default function Username() {
  const username = useSelector((store) => store.username)
  return (
    <div>
      <div>username: {username}</div>
    </div>
  )
}
