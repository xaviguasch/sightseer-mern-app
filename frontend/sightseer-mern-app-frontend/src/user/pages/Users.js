import React from 'react'
import UsersList from '../components/UsersList/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Xavi Guasch',
      image:
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80',
      places: 3
    }
  ]

  return <UsersList items={USERS} />
}

export default Users
