import React from 'react';

// import './userList.css';
import UserItem from './userItem'

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className='center' >
        <h1>no found any user!</h1>
      </div>
    )
  }

  return (
    <ul>
      {
        props.items.map(user => (
          <UserItem 
            kay={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        ))
      }
    </ul>
  )
}

export default UsersList;