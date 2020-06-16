import React from 'react';
import UsersList from '../components/usersList'

const Users = () => {

  const USERS = [
    {
      id: 1,
      name: 'deny',
      image: 'https://a7.org/pictures/886/886286.jpg',
      places: 3
    },
    // {
    //   id: 1,
    //   name: 'lila',
    //   image: 'https://a7.org/pictures/368x223/961143.jpg',
    //   places: 5
    // }
  ]

  return (
    <UsersList items={USERS} />
  )
}

export default Users