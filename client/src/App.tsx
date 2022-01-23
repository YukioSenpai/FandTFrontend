import { useAllUsersQuery } from 'graphql/client/graphql-frontend'
import { FC } from 'react'

export const App: FC = () => {
  const users = useAllUsersQuery().data?.users

  console.log(users)

  return <div>{users?.map(u => u?.id)}</div>
}
