import { useAllUsersQuery, useLoginMutation } from 'graphql/client/graphql-frontend'
import { FC } from 'react'

export const App: FC = () => {
  const users = useAllUsersQuery().data?.users

  const [login] = useLoginMutation()

  const log = async () => {
    const muation = await login()
    const token = muation.data?.loginUser.token

    localStorage.setItem('token', token || '')
  }

  const logout = () => {
    localStorage.setItem('token', '')
  }

  console.log(users)

  return (
    <div>
      <button onClick={log}>login</button>
      <button onClick={logout}>logout</button>
      <div>{users?.map(u => u?.id)}</div>
    </div>
  )
}
